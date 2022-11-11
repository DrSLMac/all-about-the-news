import React from 'react'
import './NavBar.css'
import categories from '../../data/categories.json'
import NavBarElement from './NavBarElement'

const NavBar = ( {handleClick} ) => {

const allCategories = categories.map((eachCategory) => {
    const { category, id } = eachCategory
    let sectionName = (category).toLowerCase()
    return <NavBarElement 
            key={id} 
            tag={sectionName}
            display={category}
            handleClick={handleClick}
            />
        })
        return (
            <nav>
                {allCategories}
            </nav>
    )
}

export default NavBar