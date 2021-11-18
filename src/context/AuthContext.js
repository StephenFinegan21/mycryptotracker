//Context handles the global state of the current user (Authenticated / not authenticated)
//Different actions such as registering, logging in, logging out will change the auth state
//AuthContext will handle updating the state and make it available to different components.
//Allows us to change what to show the user depending on if they are authenticated

import {  createContext, useReducer  } from "react";
import { useEffect } from "react";
import { cryptoAuth } from "../firebase/config";

export const AuthContext = createContext()

//Manages the state of user authentication
export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, user: action.payload } //set user as the value passed from action
            
        case 'LOGOUT':
            return {...state, user: null }          //user is null - so logs out

        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authIsReady: true }
            
        default :
            return state
    }
}

export const AuthContextProvider = ( { children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false
    })
   
    useEffect(() => {
       const unsub =  cryptoAuth.onAuthStateChanged((user) => {
           dispatch({type: 'AUTH_IS_READY' , payload: user})
            unsub() //will only run the function once
         })

    }, [])

  

    return (
        //Provider gives the child components access to the current authentication state
        <AuthContext.Provider value={{ ...state, dispatch }} >
            { children }
        </AuthContext.Provider>
    )

}