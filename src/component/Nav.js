import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout } from '../hooks/useLogout'
import { useContext } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'


const Nav = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    

    return (
        <>
        <div className="navbar" >
        
    
         <ul>
            <li>News</li>
            <li>Rankings</li>
            {!user && 
            <>
            <li><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
            </>
            }

            {user && 
            <li>
                <p>Hello {user.displayName}</p>
            <button onClick={logout}><Link to="/login" style={{ textDecoration: 'none' }}>Logout</Link></button>
            </li>
            }
        </ul>
        </div>



        </>
    )
}

export default Nav
