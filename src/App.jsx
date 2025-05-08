import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loading from './Components/Loading/Loading'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading onFinish={() => setIsLoading(false)} />
      ) : (
        <>
        <Hero />
        <About/>
        <Projects/>
        <Gallery/>
        <Contact/>
        <Footer/>
        </>
      )}
    </>
  )
}

export default App
