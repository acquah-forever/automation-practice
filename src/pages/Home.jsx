import React from 'react'
import Hero from '../components/Hero'
import AgentFeatures from '../components/AgentFeatures'
import Collaboration from '../components/Collaboration'
import Reviews from '../components/Reviews'
import Price from '../components/Price'
import CTA from '../components/CTA'
import Faq from '../components/Faq'
import Rev1 from '../assets/rev1.jpg'
import Rev2 from '../assets/rev2.jpg'
import Rev3 from '../assets/rev3.jpg'
import Rev4 from '../assets/rev4.jpg'
import Rev5 from '../assets/rev5.jpg'
import Rev6 from '../assets/rev6.jpg'


const Home = () => {

  const data = [
    {
      id: 1,
      title: "Founder & CEO",
      image: Rev1,
      review: `"Super clean and easy to use. These 
      Tailwind + React components saved me 
      hours of dev time and countless lines of..."`,
      name: "-Richard Nelson"
    },
    {
      id: 2,
      title: "Founder & CEO",
      image: Rev2,
      review: `"The design quality is top-notch. Perfect 
      balance between simplicity and style.
      Highly recommend for any..."`,
      name: "-Sophia Martinez"
    },
    {
      id: 3,
      title: "Founder & CEO",
      image: Rev3,
      review: `"Absolutely love the reusability of these
      components. My workflow feels 10x faster
      now with cleaner and more consistent..."`,
      name: "-Ethan Roberts"
    },
    {
      id: 4,
      title: "Founder & CEO",
      image: Rev5,
      review: `"Clean, elegant and efficient. These
      components are a dream for any modern
      web developer who values beautiful code"`,
      name: "-Isabella Kim"
    },
    {
      id: 5,
      title: "Founder & CEO",
      image: Rev4,
      review: `"I have tried dozens of UI kits, but this one just
      feels right. Everything works seamlessly and 
      looks incredibly polished."`,
      name: "-Liam Johnson"
    },
    {
      id: 6,
      title: "Founder & CEO",
      image:Rev6,
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
      <div className='mt-25 max-w-8xl px-15 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
        {data.map((e) => (<Reviews
          key={e.id}
          title={e.title}
          image={e.image}
          review={e.review}
          name={e.name}
        />))}
      </div>
      <Faq />
      <Price />
      <CTA />
    </div>
  )
}

export default Home
