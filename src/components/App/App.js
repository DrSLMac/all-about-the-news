import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getArticles } from '../../utilities/apiCalls';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FilteredView from '../FilteredView/FilteredView';
import DetailView from '../DetailView/DetailView';
import AppContext from '../../utilities/Context';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])
  const [singleStory, setSingleStory] = useState('')
  const [noArticles, setNoArticles] = useState(false)
  const [errorOccurred, setErrorOccurred] = useState(false)
  const [path, setPath] = useState("home")

  const handleClick = (tag) => {
    return setPath(tag.tag)
  }
  
  const globals = {
    articles: articles,
    setArticles: setArticles,
    singleStory: singleStory,
    setSingleStory: setSingleStory,
    noArticles: noArticles,
    setNoArticles: setNoArticles,
    path: path,
    setPath: setPath,
    handleClick: handleClick
  }
  
  useEffect(() => {
    setLoading(true)
    getArticles(`${path}`)

    .then((res) => {
      if(res.results) {
        console.log("res.results: ", res.results)
        globals.setNoArticles(false)
        globals.setArticles(res.results)
        setLoading(false)
      } else {
        globals.setNoArticles(true)
      }
    })
    .catch(error => {
      setErrorOccurred(true)
    })
  }, [path])
  
  return loading ? 
  (
    <AppContext.Provider value={globals}>
        <div>
          <main className='App'>
            <Header />
            <NavBar />
            <div className='loading-message-container'>
              <h2 className='loading-message'>Take your time...We're just getting warmed up.</h2>
              <h2 className='loading-message'>Maybe hit refresh if it's been a minute ⏱</h2>
            </div>
          </main>
          <Footer />
        </div>
        </AppContext.Provider>
      ) 
        : 
      (
        <AppContext.Provider value={globals}>
          <div>
          {errorOccurred && <ErrorHandling />}
            <main className='App'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`/${path}`} element={<FilteredView />} />
              <Route path="/storyDetail/:id" element={<DetailView />} />
              <Route path="/" element={<Navigate to="/" />} />       
            </Routes>
              {/* <Header />
              <NavBar handleClick={handleClick}/>
              <NewsStand articles={articles} noArticles={noArticles}/>

              <Footer /> */}
            </main>
          </div>
        </AppContext.Provider>
      )
  }

export default App;
