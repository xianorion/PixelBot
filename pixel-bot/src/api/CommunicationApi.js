import axios from 'axios';

const baseUrl = "http://localhost:8080/userquery/";

export async function getSpeechFromText(text, userId, voice){
    let voiceFile =null;

    try{
        const res = await axios.get(baseUrl+"getSpeech", {params:{text, userId, voice}, responseType: 'arraybuffer'});
        console.log("res is...", res);
        voiceFile = new Blob([res.data], { type: 'audio/mpeg' });
    
    }catch(err){
        console.error(err);
    }

    // await axios.get(baseUrl+"getSpeech", {params:{text, userId, voice}})
    // .then(res =>{
    //     console.log("Voice file: ", res);
    //     voiceFile = res.data?res.data:null;
    // })
    // .catch( err =>{
    //     console.log("Error handling request")
    // });

    return voiceFile;

}