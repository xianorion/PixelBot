import React, { useState } from "react"
import axios from "axios";
import BotOptions from "./BotOptions";


const Bot = () => {
    let [message, setMessage] = useState("");
    let [botFace, setBotFace] = useState("._.");



     const submitQuery = async (e) =>{
        e.preventDefault();
        //call for speech to play

        //play voice
        setBotFace(".0.");

        //once voice is done playing, set bot face to closed.

    }


    return(
        <>
        <h1>{botFace}</h1>
        <h2>Types something in the field below and chat bot will display it for you!</h2>
        <BotOptions/>
        <form>
            <label>
                What should the bot say?
                <br/>
                <input></input>
            </label>
            <br/>
            <button onClick={submitQuery}>Speak to me bot!</button>
        </form>
        </>
    )


}


export default Bot;