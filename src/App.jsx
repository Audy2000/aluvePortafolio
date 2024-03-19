import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './components/Cabecera'
import Navbar from './components/Navbar'
import Resumen from './components/Resumen'
import Tabs from './components/Tabs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container" >
        
      
        <Cabecera/>
        <Tabs/>

      </div>

       
    </>
  )
}

export default App
