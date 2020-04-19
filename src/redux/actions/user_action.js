export const LOGIN = "LOGIN"
export const LOG_OFF = "LOG_OFF"
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT"

export function loginAction(userID, type, firstName, lastName, email, username, password){
    return{
        type: LOGIN,
        payload: {userID, type, firstName, lastName, email, username, password}
    }
}

export function logoffAction(userID){
    return{
        type: LOG_OFF,
        payload: {userID}
    }
}

export function updateAccountAction(userID, type, firstName, lastName, email, username, password){
    return{
        type: UPDATE_ACCOUNT,
        payload: {userID, type, firstName, lastName, email, username, password}
    }
}
