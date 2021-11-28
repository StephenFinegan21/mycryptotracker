import { useReducer, useEffect, useState } from "react";
import { cryptoFirestore } from "../firebase/config";


//The init state will be null, will be updated ;ater on using the reducer
let initialState = {
    record: null,
    isPending: false,
    error:null,
    success: null
}

const fireReducer = (state, action) =>{
    switch(action.type){
        case 'IS_PENDING':
            return {record:null, success: false, isPending: true, error: null}

            case 'ADDED_RECORD':
            return { isPending: false, record: action.payload, success: true, error: null }

            case 'UPDATED_RECORD':
            return { isPending: false, record: action.payload, success: true, error: null }

            case 'DELETED_RECORD':
            return { isPending: false, record: null, success: true, error: null }

            case 'DELETED_TRANSACTION':
            return { isPending: false, record: null, success: true, error: null }

            case 'ERROR':
            return {isPending: false, record:null, success: false,  error: action.payload }

        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(fireReducer, initialState) //response that will come from firestore
    const [isCancelled, setIsCancelled] = useState(false)

    const reference = cryptoFirestore.collection(collection) //reference to the database

    //only dispatch if not cancelled
    const dispatchIfnotCancelled = (action) =>{
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addRecord = async (doc) => {
        dispatch({type: 'IS_PENDING'})

        try{
           const addedDoc =  await reference.add(doc)
           dispatchIfnotCancelled( {type: 'ADDED_RECORD', payload: addedDoc})
        }
        catch(errorMsg){
            dispatchIfnotCancelled( {type: 'ERROR', payload: errorMsg.message})
        }
    }

    const deleteRecord = async (id) => {
        dispatch({type: 'IS_PENDING'})

        try{
            await reference.doc(id).delete()
            dispatchIfnotCancelled( {type: 'DELETED_RECORD'})
         }
         catch(errorMsg){
             dispatchIfnotCancelled( {type: 'ERROR', payload: errorMsg.message})
         }
     }

     const deleteTransaction = async (id, index) => {
        dispatch({type: 'IS_PENDING'})

        try{
            console.log(reference.doc(id))
            await reference.doc(id).transactions[index].delete()
            dispatchIfnotCancelled( {type: 'DELETED_TRANSACTION'})
         }
         catch(errorMsg){
             dispatchIfnotCancelled( {type: 'ERROR', payload: errorMsg.message})
         }
     }


     const updateRecord = async (id, updatedData) => {
        dispatch({type: 'IS_PENDING'})

        try{
           const updatedRecord =  await reference.doc(id).update(updatedData)
           dispatchIfnotCancelled( {type: 'UPDATED_RECORD', payload: updatedRecord})
           return updatedRecord
        }
        catch(errorMsg){
            dispatchIfnotCancelled( {type: 'ERROR', payload: errorMsg.message})
        }
    }

    

    useEffect(() =>{
        return () => setIsCancelled(true)
    }, [])

    return {addRecord, updateRecord,  deleteRecord, deleteTransaction, response}
}