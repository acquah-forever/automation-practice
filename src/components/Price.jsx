import React from 'react'
import { Rocket, Check } from 'lucide-react'

const Price = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-3xl font-semibold">Our Pricing Plans</h1>
            <p className="font-medium text-sm">A visual. collection of our most recent works - each place
                <br />
                crafted with intention , emotion and style
            </p>
            <div>
                <Rocket />
                <p className="font-bold text-sm">Starter</p>
            </div>
            <h1 className='font-bold'>$19/ <span className='font-medium'>month</span></h1>
            <p className="font-light text-md">For individuals and small teams.</p>
            <button>Get Started</button>

            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">Up to 10 projects</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">10 AI tasks/moth</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">Basic text generation</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">Simple chatbox access</p>
            </div>
            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">Email support only</p>   </div>
            <div className='flex items-center space-x-3'>
                <Check className='w-4 h-4' />
                <p className="font-light text-sm">Community resources</p>
            </div>



        </div>
    )
}

export default Price
