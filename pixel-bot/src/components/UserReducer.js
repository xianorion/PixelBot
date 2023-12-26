
const initialState = null;

 export default function userReducer(state = initialState, action){

    switch(action.type){

        case "added":{
            const userInfo = action.data;
            return {
                    ...userInfo
            }
        }
        case "changed":{
            const userInfo = action.data;
            return {
                ...state,
                    ...userInfo
            }
        }
        case 'delete':{
            return null;
        }
        default: {
            throw Error("No Action found with type: ", action.type);
        }
    }
}