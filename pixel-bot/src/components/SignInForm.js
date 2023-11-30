import React, { useState } from 'react';
import {SignInByEmail} from './UserService';


function SignInForm(props){
    let [loading, setLoading] = useState(false);

    const  callSignIn = async (e) =>{
        let user = null;
        setLoading(true);
        user = await SignInByEmail(e.target[0].value);
        console.log("User gotten: ", user);
        setLoading(false);
        console.log("props", props);
        props.setActiveUser(user);

    }

    return (<>
    <h3>Sign In</h3>
    {loading?<h4>Signing in...</h4>:
    <form onSubmit={(e) =>callSignIn(e)}>
        <input required={true} placeholder='Email' type="text" name="email"/>
        <br/>
        <input type="submit" value="login" />
    </form>}
    </>)
}

export default SignInForm;