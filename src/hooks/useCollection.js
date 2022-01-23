//Hook which gets the Crypto collection from Firebase
import { useEffect, useState, useRef } from "react";
import { cryptoFirestore } from "../firebase/config";

export const useCollection = (collection, _userQuery) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const userQuery = useRef(_userQuery).current

    useEffect(() => {
    let reference = cryptoFirestore.collection(collection)

    if(userQuery){
        reference = reference.where(...userQuery)
    }

    const unsub = reference.onSnapshot((snapshot) => {
        let results = []
        snapshot.docs.forEach(doc => {
            results.push({...doc.data(), id: doc.id })
        })
        setDocuments(results)
        setError(null)
    },
    (error) => {
        console.log(error)
        setError(error)
    })

    return() => unsub()

    }, [collection, userQuery])

    return {documents, error}

}


