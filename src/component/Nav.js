import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
        <div className="navbar">
        
         <ul>
            <li>News</li>
            <li>Rankings</li>
            <li><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
        </ul>
        </div>



        </>
    )
}

export default Nav
