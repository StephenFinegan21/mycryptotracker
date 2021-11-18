import { useState, useEffect } from "react"
import { cryptoAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const [isCancelled, setIscancelled ] = useState(false)

    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
     const { dispatch } = useAuthContext();  

     const logout = async () => {
         setError(null)
         setIsPending(true)

         try{
            await cryptoAuth.signOut()
            dispatch( { type: 'LOGOUT' }) 

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
            
         }
         catch(errorMsg){
            if(!isCancelled){
             console.log(errorMsg.message)
             setError(errorMsg.message)
             setIsPending(false)
         }
        }
     }

     useEffect ( ()  => {
        return () => setIscancelled(true)
     }, [])

     return { logout, error, isPending }
    

}
