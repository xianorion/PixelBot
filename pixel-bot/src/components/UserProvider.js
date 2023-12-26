import { createContext, useContext, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext(null);
const UserContextDispatch = createContext(null);

const UserProvider = ({children}) =>{

    const [user, dispatch] = useReducer(
        userReducer,
        null
      );


    return (
        <UserContext.Provider value={user}>
            <UserContextDispatch.Provider value={dispatch}>
            {children}
            </UserContextDispatch.Provider>
        </UserContext.Provider>
    )
}

export function useUser (){
    return useContext(UserContext);
}

export function useUserDispatch (){
    return useContext(UserContextDispatch);
}

export default UserProvider;
