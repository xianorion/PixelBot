import { getUserByEmail } from './UserApi';


 export async function SignInByEmail(email){
    console.log("SignInByEmail given: ", email);
    //get user by email call
    let userRes = await getUserByEmail(email);

    //get first user convert to json
    let userJson = JSON.parse(userRes);
    //get first user
    let userFound = null;
    if(userJson[0] != null){
        userFound = userJson[0];
    }

    return userFound;
}