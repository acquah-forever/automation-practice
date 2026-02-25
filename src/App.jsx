import React from 'react'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Hero from './components/Hero'
import AgentFeatures from './components/AgentFeatures'
import Collaboration from './components/Collaboration'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Price from './components/Price'
import CTA from './components/CTA'


const App = () => {
  return (
    <div className='mx-auto min-h-screen p-4'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/agentfeatures' element={<AgentFeatures />} />
        <Route path='/collaboration' element={<Collaboration />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/price' element={<Price />} />
        <Route path='/cta' element={<CTA />} />



      </Routes>

    </div>
  )
}

export default App
