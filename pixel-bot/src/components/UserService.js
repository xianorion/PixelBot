import { getUserByEmail } from './UserApi';


 export async function SignInByEmail(email){
    console.log("SignInByEmail given: ", email);
    //get user by email call
    let userRes = await getUserByEmail(email);
    console.log("SignInByEmail userRes: ", userRes);
    //get first user convert to json
    let userJson = JSON.parse(userRes);
    console.log("SignInByEmail pasrsed JSON: ", userJson);
    //get first user
    let userFound = null;
    if(userJson[0] != null){
        userFound = userJson[0];
    }

    return userFound;
}