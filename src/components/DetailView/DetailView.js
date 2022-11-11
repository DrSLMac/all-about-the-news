import React, {useContext} from 'react'
import "./DetailView.css"
import AppContext from '../../utilities/Context'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import DetailNavBar from '../../components/NavBar/DetailNavBar'


const DetailView = () => {
    const globals = useContext(AppContext)

    const { abstract, byline, multimedia, title, section, url, published_date } = globals.singleStory
    const date = published_date.slice(0, published_date.length - 15)
    const splitDates = date.split('-')

    const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1)
        return date.toLocaleString('en-US', { month: "long" })
    }
    const month = getMonthName(splitDates[1])
    const newDate = `${month} ${splitDates[2]}, ${splitDates[0]}`

    const capSection = (section) => {
        return section.toString().charAt(0).toUpperCase() + section.slice(1)
    }
    const capped = capSection(section)

    return (
        <>
        <div className='detail-view'>
            <Header />
            <DetailNavBar />
            <div className='detail-container'>

                <div className='center-panel'>

                    <div className='detail-text'>
                        <div className='title-container'>
                            <h1 className='details-title'>{title}</h1>
                        </div>
                        <div className='detail-byline'>
                            <h2>{byline}</h2>
                            <h2>Section: {capped}</h2>
                            <h2>Published on: {newDate}</h2>
                        </div>
                        <p className='abstract'>{abstract}</p>

                        <div className='link-wrapper'>
                            <span className='inner-wrapper wrapper'>
                                <a className="url-link link" href={url}>
                                    Click here to see full story in New York Times
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className='image-container'>
                        <img className="detail-image" src={multimedia[0].url} alt={`${section} selected article`} />
                    </div>

                </div>

            </div>
            <Footer />
        </div>
        </>
    )
}

export default DetailView