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
  const [showIntro, setShowIntro] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showIntro && videoReady) {
      setPageLoading(true);
      const t = setTimeout(() => setPageLoading(false), 600);
      return () => clearTimeout(t);
    }
  }, [location.pathname, showIntro, videoReady]);

  return (
    <>
      <BackGround onReady={() => setVideoReady(true)} />

      {showIntro && <Loader />}

      {!showIntro && !videoReady && <SampleLoading />}

      {!showIntro && videoReady && (
        <>
          <RoundedCursor />
          {pageLoading && <SampleLoading />}

          <NavBar />
          <Routes>
            <Route path="/" element={<HeroContent />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App
