import React, { useState, useRef } from "react"
import AudioPlayer from "./AudioPlayer";
import BotOptions from "./BotOptions";
import { textToSpeech } from "./CommunicationService";


const Bot = (props) => {
    let activeUser = props.activeUser;
    let [message, setMessage] = useState("");
    let [botFace, setBotFace] = useState("._.");
    let [error, setError] = useState(null);
    let [audioData, setAudioData] = useState(null);
    let [isPlaying, setIsPlaying] = useState(false);
    /*
    In summary, useRef is employed to create mutable references that persist across renders, 
    providing a way to interact with certain values or elements without causing unnecessary re-renders.

    The useRef hook is used to create mutable object properties that persist across renders. 
    In the context of the React functional component, useRef is useful for maintaining references to certain values 
    or elements that need to persist across renders without triggering a re-render.
    */
    const audioRef = useRef(null);
    const botFaceIntervalRef = useRef(null);

     const submitQuery = async (e) =>{
        e.preventDefault();
        //call for speech to play
        console.log("activeUser:", activeUser);
        let {id, preferredVoice} = {...activeUser}
        await textToSpeech(message, id, preferredVoice ).then(res =>{
            console.log("Audio Data given to bot: ", res);
            const audio = new Audio(res);
            audio.addEventListener('canplay', () => {
                audio.play();
                setAudioData(res);
                setError(null);
                setBotFace(".0.");
                setIsPlaying(true);
            });

            // Add a timeupdate event listener to perform actions while playing
            audio.addEventListener('timeupdate', handleTimeUpdate);
             // Save the audio element to the ref for later access
             audioRef.current = audio;
              // Set up a timer to toggle the bot's face every 0.1 seconds
              botFaceIntervalRef.current = startMouthAnimation();
        }).catch(err=>{
            setError("Error getting speech from bot...");
            console.log("ERROR:", err);
            //play voice
            setBotFace(">_<");
        });

        

        //once voice is done playing, set bot face to closed.

    }

    const handleTimeUpdate = () => {
        // This function will be called continuously during audio playback
        console.log('Current playback time:', audioRef.current.currentTime);

       // Example: Update bot's face based on playback time
       if (audioRef.current.currentTime >= audioRef.current.duration) {
        clearInterval(botFaceIntervalRef.current);
        setBotFace("._.");
        setIsPlaying(false);
       } 
    };

    const startMouthAnimation = () => {
        // Set up a timer to toggle the bot's face every 0.1 seconds
        return setInterval(() => {
            setBotFace((prevFace) => (prevFace === ".0." ? "._." : ".0."));
        }, 250);
    };


    return(
        <>
        <h1>{botFace}</h1>
        
        {audioData?<><AudioPlayer audioData={audioData} /></>:<></>}
        {isPlaying === false?
        <><h2>Types something in the field below and chat bot will display it for you!</h2>
        <BotOptions/>
        <form>
            <label>
                What should the bot say?
                <br/>
                {error != null?<>{error}<br/></>:<></>}
                <input onChange={(e)=>setMessage(e.target.value)} ></input>
            </label>
            <br/>
            <button onClick={submitQuery}>Speak to me bot!</button>
        </form></>:<>^^^</>}
        </>
    )


}


export default Bot;