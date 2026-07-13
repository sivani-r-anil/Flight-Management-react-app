import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddFlight from './components/AddFlight'
import ViewFlight from './components/ViewFlight'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddFlight />
      <Home/>
      

      <ViewFlight/>
      <NavigationBar/>
    </>
  )
}

export default App
