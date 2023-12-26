import { getSpeechFromText } from "../api/CommunicationApi";


export async function textToSpeech(text, userId, voice){

    const blob= await getSpeechFromText(text, userId, voice);
    const url = URL.createObjectURL(blob)

    return url;
}