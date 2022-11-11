import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NewsStand from '../NewsStand/NewsStand'
import NavBar from '../NavBar/NavBar'

const Home = () => {
    // const [articles, setArticles] = useState([])
    // const [noArticles, setNoArticles] = useState(false)

    return (
        <main>
            <Header />
            <NavBar />
            <NewsStand />
            <Footer />
        </main>
    )
}

export default Home