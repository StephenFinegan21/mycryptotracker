import { useState, useEffect } from 'react'
import { cryptoAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      const response = await cryptoAuth.signInWithEmailAndPassword(email, password)

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(errorMsg) {
      if (!isCancelled) {
        setError(errorMsg.message)
        setIsPending(false)
      }
    }
  }

 
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}