import { getUserByEmail } from '../api/UserApi';


 export async function SignInByEmail(email){
    //get user by email call
    let userRes = await getUserByEmail(email);
    //get first user convert to json
    console.log("pre parse userRes:",userRes );
    let userJson = userRes;
    //get first user
    let userFound = null;
    if(userJson[0] != null){
        userFound = userJson[0];
    }

    return userFound;
}