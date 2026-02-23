import React from 'react'
import Hero from '../components/Hero'
import AgentFeatures from '../components/AgentFeatures'
import Collaboration from '../components/Collaboration'
import Reviews from '../components/Reviews'

const Home = () => {

  const data = [
    {
      id:1,
      title:"Founder & CEO",
      review:`"Super clean and easy to use. These 
      Tailwind + React components saved me 
      hours of dev time and countless lines of..."`,
      name:"-Richard Nelson"
    },
    {
      id:2,
      
    }
  ]



  return (
    <div>
      <Hero />
      <AgentFeatures />
      <Collaboration />
      <Reviews />
      
    </div>
  )
}

export default Home
