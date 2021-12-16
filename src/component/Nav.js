import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Nav = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    

    return (
        <>
        {!user &&
            <div className="navbar" >
                <ul>
                <li><Link to="/News" style={{ textDecoration: 'none'}}>News</Link></li>
                    <li><Link to="/Rankings" style={{ textDecoration: 'none'}}>Rankings</Link></li>
                    <li><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
                </ul>
            </div>
        }


        {user &&
            <div className="dark-navbar" >
                <ul>
                    <li><Link to="/news" style={{ textDecoration: 'none' }}>News</Link></li>
                    <li><Link to="/dashboard" style={{ textDecoration: 'none'}}>Dashboard</Link></li>
                    <li><Link to="/Rankings" style={{ textDecoration: 'none'}}>Rankings</Link></li>
                    <li onClick={logout}><Link to="/login" style={{ textDecoration: 'none'}}>Logout</Link></li>
                </ul>
            </div>
    
        }           
       



        </>
    )
}


export default Nav
