import './App.css'
import NavBar from './assets/components/NavBar'
import HeroContent from './assets/components/HeroContent'
import BackGround from './assets/components/BackGround'
import { useEffect, useState } from 'react'
import Loader from './assets/components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false)
    }, 12500)
    return () => clearTimeout(interval)
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackGround />
          <NavBar />
          <HeroContent />
        </>
      )}
    </>
  )
}

export default App
