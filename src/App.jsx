import React from 'react'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Hero from './components/Hero'
import AgentFeatures from './components/AgentFeatures'
import Collaboration from './components/Collaboration'


const App = () => {
  return (
    <div className='mx-auto min-h-screen p-4'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/agentfeatures' element={<AgentFeatures />} />
        <Route path='/collaboration' element={<Collaboration />} />
      </Routes>

    </div>
  )
}

export default App
