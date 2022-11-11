import React from 'react'
import './Header.css'
import butterfly from '../../assets/butterfly.png'

const Header = () => {
    return (
        <header className='header'>
            <a href='/'><img className='butterfly return-home' src={butterfly} alt="butterfly with news print on wings"/></a>
            <a className="return-link" href='/'><p>Go Back Home 🦋</p></a>
            <a href='/' className='head-title return-home'>All About the News</a>
        </header>

    )
}

export default Header