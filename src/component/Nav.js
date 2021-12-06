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
        {!user &&
            <div className="navbar" >
                <ul>
                    <li>News</li>
                    <li><Link to="/Rankings" style={{ textDecoration: 'none', color: '#222D41' }}>Rankings</Link></li>
                    <li><Link to="/login" style={{ textDecoration: 'none', color: '#222D41' }}>Login</Link></li>
                </ul>
            </div>
        }


        {user &&
            <div className="dark-navbar" >
                <ul>
                    <li>News</li>
                    <li><Link to="/dashboard" style={{ textDecoration: 'none', color: '#F9F8F4' }}>Dashboard</Link></li>
                    <li><Link to="/Rankings" style={{ textDecoration: 'none', color: '#F9F8F4' }}>Rankings</Link></li>
                    <li onClick={logout}><Link to="/login" style={{ textDecoration: 'none', color: '#F9F8F4' }}>Logout</Link></li>
                </ul>
            </div>
    
        }           
       



        </>
    )
}


export default Nav
