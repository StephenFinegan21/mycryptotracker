import { useReducer, useEffect, useState } from "react";
import { cryptoFirestore } from "../firebase/config";

//The init state will be null, will be updated ;ater on using the reducer
let initialState = {
    document: null,
    isPending: false,
    error:null,
    success: null
}

const fireReducer = (state, action) =>{
    switch(action.type){

        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(fireReducer, initialState) //response that will come from firestore
}