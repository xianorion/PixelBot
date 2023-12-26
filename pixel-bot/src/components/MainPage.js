import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import Bot from "./Bot";
import { useUser } from "./UserProvider";



function MainPage () {
    let user = useUser();
    let [userName, setUserName] = useState(null);

    useEffect(()=>{

        if(user){
            console.log("Active User found!", user);
            setUserName(user.username);
        }
    },[user]);


    return(<>
    {user?(
        <>
            <h1>Welcome {userName}!!!</h1>
            <Bot/>
        </>
    ): <SignInForm />}
    

    </>);

}


export default MainPage;