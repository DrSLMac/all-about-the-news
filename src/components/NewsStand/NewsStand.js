import React, {useContext} from 'react'
import AppContext from '../../Context'
import StoryTile from '../StoryTile/StoryTile'
import './NewsStand.css'

const NewsStand = () => {
    const globals = useContext(AppContext)
    const articles = globals.articles

    const allArticles = articles.map((article) => {
        const { abstract, byline, multimedia, title, section, uri, short_url } = article
        return <StoryTile 
            abstract={abstract}
            byline={byline}
            image={multimedia}
            title={title}
            section={section}
            key={uri}
            url={short_url}
            uri={uri}
            id={title}
            />
    })

    return (
        <section className='newsStand'>
            {allArticles}
        </section>
    )
}

export default NewsStand