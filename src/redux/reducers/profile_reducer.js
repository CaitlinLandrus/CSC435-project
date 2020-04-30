import {LOGIN} from "../actions/user_action";
import {LOG_OFF} from "../actions/user_action";
import {UPDATE_ACCOUNT} from "../actions/user_action";

/**
* action = {
    type: "String",
    payload: "DATA"
}
*/

const INITIAL_STATE={
        "userID": "",
        "type": "",
        "firstName":"",
        "lastName":"",
        "email": "",
        "username":"",
        "password": ""
};

export default function  profileReducter(state = INITIAL_STATE, action ={}){
    switch(action.type){
        case LOGIN:{
            //console.log(action)
            const user = action.payload;
            //update the state with the passed user data
            const profile = {
                "userID": user.userID,
                "type": user.type,
                "firstName":user.firstName,
                "lastName":user.lastName,
                "email": user.email,
                "username":user.username,
                "password": user.password
            };
            return profile;

        }

        case LOG_OFF:{
            //console.log(action)
            const user = action.payload;

            //clear the state values
            if(state.userID === user.userID){
                return INITIAL_STATE;
            }
            break;
        }

        case UPDATE_ACCOUNT:{
            //console.log(action)
            const user = action.payload;
            if(state.userID === user.userID){
                //update profile with the new user information
                const profile = {
                    "userID": user.userID,
                    "type": user.type,
                    "firstName":user.firstName,
                    "lastName":user.lastName,
                    "email": user.email,
                    "username":user.username,
                    "password": user.password
                };

                return profile;
            }
            break;
        }
        default:{

            break;
        }
    }
    return state;
}
