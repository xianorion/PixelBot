import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import Bot from "./Bot";



function MainPage () {
    let [activeUser, setActiveUser] = useState(null);
    let [userName, setUserName] = useState(null);

    useEffect(()=>{

        if(activeUser){
            console.log("Active User found!", activeUser);
            setUserName(activeUser.username);
        }
    },[activeUser]);


    return(<>
    {activeUser?(
        <>
            <h1>Welcome {userName}!!!</h1>
            <Bot activeUser={activeUser}/>
        </>
    ): <SignInForm setActiveUser={setActiveUser}/>}
    

    </>);

}


export default MainPage;