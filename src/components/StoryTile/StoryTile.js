import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../utilities/Context'
import './StoryTile.css'

const StoryTile = ({ abstract, byline, image, title, section, url, id }) => {
    // console.log({id})
    const globals = useContext(AppContext)

    const handleButtonClick = (e) => {
        console.log("e.currentTarget.name: ", e.currentTarget.name)
        let detailedStory = globals.articles.find(article => {
            // console.log("article.title: ", article.title)
            return article.title === e.currentTarget.name ? article : console.log("Nope. Try again.")
        })
        globals.setSingleStory(detailedStory)
    }

    return (!abstract || !byline || !image || !title || !url) ?
    (
        <div></div>
    )
    :
    (
            <article className='article-container'>
                <div className='article-text'>
                    <h2 className='article-title'>{title}</h2>
                    <h3>{byline}</h3>
                    <h3>Section: {section}</h3>
                    <p><strong>Abstract: </strong> {abstract}</p>
                    {/* <a href={url}>Click here for full story</a> */}
                </div>

                    <div className='story-button'>
                        <Link  className="backButton-tile-pushable" to={`/storyDetail/${id}`}>
                            <span className="backButton-tile-shadow"></span>
                            <span className="backButton-tile-edge"></span>
                            <span className="backButton-tile-front">
                            <button className='backButton-tile '
                                    name={id}
                                    onClick={(e) => handleButtonClick(e)}>
                                Click here to see more details
                            </button>
                            </span>
                        </Link>
                    </div>

                <div className='multimedia-container'>
                    {!image ? <div></div> : 
                    <img className='multimedia' src={image[0].url} alt={`${section} article`}/>}
                </div>

            </article>
    )
}

export default StoryTile