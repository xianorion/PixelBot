import React, { useState } from 'react';
import {SignInByEmail} from './UserService';


function SignInForm(props){
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [emailTyped, setEmailTyped] = useState(null);

    const  callSignIn = async (e) =>{
        e.preventDefault();

        console.log()
        setLoading(true);
        await SignInByEmail(emailTyped).then(
            res =>{
                console.log("Response from call: ", res);
                props.setActiveUser(res);

                setLoading(false);
                setError(null);
            }
        ).catch(err=>{
            setError("Error logging in. Please try again: ",err)
            setLoading(false);
        });
        setLoading(false);
        

    }

    return (<>
    <h3>Sign In</h3>
    {loading?<h4>Signing in...</h4>:
    <>
     {error? <>{error}</>:<></>}
    <form onSubmit={(e) =>callSignIn(e)}>
        <input required={true} placeholder='Email' type="text" name="email" onChange={(e)=>setEmailTyped(e.target.value)}/>
        <br/>
        <input type="submit" value="login" />
    </form>
    </>
    }
    </>)
}

export default SignInForm;