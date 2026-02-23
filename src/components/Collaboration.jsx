import React from 'react'
import { ExternalLink} from 'lucide-react'
import Link from '../assets/link.jpg'

const Collaboration = () => {
  return (
    <div>
        <div>
        <img src={Link} alt="link" />
        </div>
        <img src={Link} alt="" />
        <h1 className="text-3xl font-semibold">Start with a Prompt</h1>
        <h3 className="text-m font-light">Start with a simple prompt describing what you want
            <br /> 
            your agent to do. Our builder interprets your idea and
            <br /> 
            creates structure in seconds.</h3>
        <h3 className="text-light text-m">Learn More</h3>
        <ExternalLink />
      
    </div>
  )
}

export default Collaboration
