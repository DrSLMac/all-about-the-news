import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context'

const NavBarElement = ({ tag, display }) => {
    // console.log({display})
    const globals = useContext(AppContext)

    return (
        <Link className='nav-link' to={`/${tag}`} onClick={()=>globals.handleClick({tag})}>{display}</Link>
        )
    }
    
    export default NavBarElement