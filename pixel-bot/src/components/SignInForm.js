import React, { useState } from 'react';
import {SignInByEmail} from './UserService';


function SignInForm(props){
    let [loading, setLoading] = useState(false);
    let [emailTyped, setEmailTyped] = useState(null);

    const  callSignIn = async (e) =>{
        e.preventDefault();

        console.log()
        let user = null;
        setLoading(true);
        //        user = await SignInByEmail(e.target[0].value);
        user = await SignInByEmail(emailTyped);
        console.log("User gotten: ", user);
        setLoading(false);
        console.log("props", props);
        props.setActiveUser(user);

    }

    return (<>
    <h3>Sign In</h3>
    {loading?<h4>Signing in...</h4>:
    <form onSubmit={(e) =>callSignIn(e)}>
        <input required={true} placeholder='Email' type="text" name="email" onChange={(e)=>setEmailTyped(e.target.value)}/>
        <br/>
        <input type="submit" value="login" />
    </form>}
    </>)
}

export default SignInForm;