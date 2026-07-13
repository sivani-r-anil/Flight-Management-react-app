import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewFlight from './components/ViewFlight'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      

      <ViewFlight/>
      <NavigationBar/>
    </>
  )
}

export default App
