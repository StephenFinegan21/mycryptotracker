
import { useState , useEffect} from "react"
import { cryptoAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {

    const [isCancelled, setIscancelled ] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
     const { dispatch } = useAuthContext();  

    const register = async (email, password, displayName ) =>{
        setError(null)      //reset any errors to null
        setIsPending(true)  //Create user process started

        try {
            const response = await cryptoAuth.createUserWithEmailAndPassword(email, password)

            if(!response){
                throw new Error('couldnt register user')
            }

            //Add display name
            await response.user.updateProfile({ displayName : displayName})

            //dispatch login action
            dispatch({ type: 'LOGIN', payload: response.user})


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
    

    return {error, isPending, register}


}