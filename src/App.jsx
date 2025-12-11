import './App.css'
import NavBar from './assets/components/NavBar'
import HeroContent from './assets/components/HeroContent'
import BackGround from './assets/components/BackGround'
import { useEffect, useState } from 'react'
import Loader from './assets/components/Loader'
import SampleLoading from './assets/components/SampleLoading'
import { Route, Routes, useLocation } from 'react-router-dom'
import Projects from './assets/components/Projects'
import About from './assets/components/AboutPage'
import RoundedCursor from './assets/components/RoundCursor'

function App() {

  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])



  const location = useLocation()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    if (!initialLoading) {
      setPageLoading(true)

      const timer = setTimeout(() => {
        setPageLoading(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [location.pathname])



  if (initialLoading) return <Loader />



  return (
    <>
      <RoundedCursor />
      {pageLoading && <SampleLoading />}

      <BackGround />
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<HeroContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
