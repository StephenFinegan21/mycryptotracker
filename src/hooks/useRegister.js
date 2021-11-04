
import { useState } from "react"
import { cryptoAuth } from "../firebase/config"

export const useRegister = () => {

    const [error, setError] = useState(null) 
    const [isPending, setIsPending] = useState(false)       

    const register = async (email, password, displayName ) =>{
        setError(null)      //reset any errors to null
        setIsPending(true)  //Create user process started

        try {
            //register
            const response = await cryptoAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user)

            if(!response){
                throw new Error('couldnt register user')
            }

            //Add display name
            await response.user.updateProfile({ displayName : displayName})

            setIsPending(false)
            setError(null)

        }
        //catch
        catch(error){
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }

    return {error, isPending, register}


}