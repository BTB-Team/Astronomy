import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './component/home/Hero'
// import About from './component/home/About'
// import Vistion from './component/home/Vision'
//  import Callery from './component/home/Callery'
//  import Features from './component/home/Feature'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <Hero />
    <>
     <Hero />
      </>   
  )
}

export default App
