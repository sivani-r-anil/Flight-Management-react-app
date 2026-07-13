import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddFlight from './components/AddFlight'
import ViewFlight from './components/ViewFlight'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     
     </BrowserRouter>
=======
      <AddFlight />
      <Home/>
      

      <ViewFlight/>
      <NavigationBar/>
>>>>>>> c835d2ee2c745c96031cf77e4195bc0283031f7b
    </>
  )
}

export default App
