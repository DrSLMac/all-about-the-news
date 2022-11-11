import React from 'react'
import './DetailNavBar.css'
import { useNavigate } from 'react-router-dom'

const DetailNavBar = (  ) => {
    const navigate = useNavigate()

        return (
            <nav className="detail-nav">
                <button className="backButton-pushable">
                    <span className="backButton-shadow"></span>
                    <span className="backButton-edge"></span>
                    <span className="backButton-front text">
                    <a className="backButton" href='/'>Go Back Home 🦋</a>
                    </span>
                </button>


                <button 
                    className="backButton backButton-pushable" 
                    onClick={() => navigate(-1)}>
                            <span className="backButton-shadow"></span>
                            <span className="backButton-edge"></span>
                            <span className="backButton-front text">
                                Return to Previous Search
                            </span>
                </button>

            </nav>
        )
    }

export default DetailNavBar