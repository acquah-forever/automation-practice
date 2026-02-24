import React from 'react'
import { ExternalLink } from 'lucide-react'
import Link from '../assets/link.jpg'


const Collaboration = () => {
    return (
        <div className='space-y-7 mt-20 '>
            <div className='max-w-x4l flex flex-col items-center  md:flex-row md:justify-center md:gap-20'>
                <div className='rounded-2xl px-5 max-w-sm'>
                    <img className='rounded-3xl' src={Link} alt="link" />
                </div>

                <div className="grid space-y-3 px-8 py-10">
                    <h1 className="text-3xl text-center sm:text-left font-semibold">Start with a Prompt</h1>
                    <h3 className="text-m font-light">Start with a simple prompt describing what you want
                        <br />
                        your agent to do. Our builder interprets your idea and
                        <br />
                        creates structure in seconds.</h3>
                    <div className="flex items-center gap-2">
                        <h3 className="text-light text-sm">Learn More</h3>
                        <ExternalLink className='w-4 h-4' />
                    </div>
                </div>
            </div>

            <div className='max-w-x4l flex flex-col-reverse items-center md:flex-row md:justify-center justify-center md:gap-10'>
                <div className="grid space-y-3 px-8 py-10">
                    <h1 className="text-3xl text-center sm:text-left font-semibold">Adjust and Personalise</h1>
                    <h3 className="text-m font-light">Adjust tasks, actions and intefrations, add personality,
                        <br />
                        rulesand data sources tomake the agent work exactly
                        <br />
                        the way you want.</h3>
                    <div className="flex items-center gap-2">
                        <h3 className="text-light text-sm">Learn More</h3>
                        <ExternalLink className='w-4 h-4' />
                    </div>
                </div>

                <div className='rounded-2xl px-5 max-w-sm'>
                    <img className='rounded-3xl' src={Link} alt="link" />
                </div>
            </div>

            <div className='max-w-x4l flex flex-col items-center md:flex-row md:justify-center gap-10'>
                <div className='rounded-2xl px-5 max-w-sm'>
                    <img className='rounded-3xl' src={Link} alt="link" />
                </div>

                <div className="grid space-y-3 px-8 py-10">
                    <h1 className="text-3xl text-center sm:text-left font-semibold">Launch and Automate</h1>
                    <h3 className="text-m font-light">Deploy your agent and let it run. It excludes tasks
                        <br />
                        autonomously. reports results, and continues working
                        <br />
                        in the background.</h3>
                    <div className="flex items-center gap-2">
                        <h3 className="text-light text-sm">Learn More</h3>
                        <ExternalLink className='w-4 h-4' />
                    </div>
                </div>
            </div>

            <div className='mt-25 space-y-10'>
                <h1 className="font-bold text-3xl text-center">Here what out Trusted Users had to say about our AI Agents.</h1>
                <h3 className="font-light text-m text-center">Empower your business with AI agents that optimize process <br /> and accelerate performance.</h3>
            </div>

        </div>
    )
}

export default Collaboration
