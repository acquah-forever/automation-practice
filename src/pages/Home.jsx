import React from 'react'
import Hero from '../components/Hero'
import AgentFeatures from '../components/AgentFeatures'
import Collaboration from '../components/Collaboration'
import Reviews from '../components/Reviews'

const Home = () => {

  const data = [
    {
      id: 1,
      title: "Founder & CEO",
      review: `"Super clean and easy to use. These 
      Tailwind + React components saved me 
      hours of dev time and countless lines of..."`,
      name: "-Richard Nelson"
    },
    {
      id: 2,
      title: "Founder & CEO",
      review: `"The design quality is top-notch. Perfect 
      balance between simplicity and style.
      Highly recommend fro any..."`,
      name: "-Sophia Martinez"
    },
    {
      id: 3,
      title: "Founder & CEO",
      review: `"Absolutely love the reusability of these
      components. My workflow feels 10x faster
      now with cleaner and more consistent..."`,
      name: "-Ethan Roberts"
    },
    {
      id: 4,
      title: "Founder & CEO",
      review: `"Clean, elegant and efficient. These
      components are a dream for any modern
      web developer who values beautiful code"`,
      name: "-Isabella Kim"
    },
    {
      id: 5,
      title: "Founder & CEO",
      review: `"I have tried dozens of UI kits, but this one jus
      feels right. Everything works seamlessly and 
      looks incredibly polished."`,
      name: "-Liam Johnson"
    },
    {
      id: 6,
      title: "Founder & CEO",
      review: `"Brilliantly structured componenets with
      clean, modern styling. Makes development
      a joy and design updates super quick."`,
      name: "-Ava Patel"
    }

  ]



  return (
    <div>
      <Hero />
      <AgentFeatures />
      <Collaboration />
      <Reviews />
      {data.map((e) => (<Reviews

      key={e.id}
      title={e.title}
      review={e.review}
      name={e.name}
      
      />))}

    </div>
  )
}

export default Home
