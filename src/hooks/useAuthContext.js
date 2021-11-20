//Custom hook that will allow different components/hooks to access the auth state from the AuthContext

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context)
{
    throw Error('error using useAuthContext')
}
    return context
}