import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBooks from './components/AddBooks'
import SearchBooks from './components/SearchBooks'
import DeleteBooks from './components/DeleteBooks'
import ViewBooks from './components/ViewBooks'
import NvBar from './components/NvBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       < BrowserRouter >
       <Routes>
        <Route path='/' element={<AddBooks/>}/>
        <Route path='/Search' element={<SearchBooks/>}/>
        <Route path='/Delete' element={<DeleteBooks/>}/>
        <Route path='/View' element={<ViewBooks/>}/>
       </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
