import React from 'react'
import './Footer.css'
import butterfly from '../../assets/butterfly.png'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="column-one">
                <img className='small-butterfly' src={butterfly} alt="small butterfly with news print on wings"/>
                <div className='logo-title'>
                    <h3>All About the News</h3>
                    <p>Thanks for stopping by!</p>
                </div>
            </div>

            <div className='contact-container'>
                <div className='contact'>
                    <h3 >Contact: </h3>
                    <p className='name'>Shauna MacFarlane-Okongo</p>
                </div>
                <div className='icons'>
                    <a
                        className='linkedin-icon'
                        href="https://www.linkedin.com/in/shauna-macfarlane-okongo/"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        className='github-icon'
                        href="https://github.com/DrSLMac"
                    >
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer