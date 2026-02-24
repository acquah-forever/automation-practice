import React from 'react'
import { Rocket, Check } from 'lucide-react'

const Price = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex mb-10 flex-col justify-center items-center text-center space-y-5'>
                <h1 className="text-3xl font-semibold">Our Pricing Plans</h1>
                <p className="font-medium text-sm">A visual collection of our most recent works - each place
                    <br />
                    crafted with intention , emotion and style
                </p>
            </div>

            <div className='p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center'>
                <div className='flex flex-col max-w-xs  p-12 border rounded-xl'>
                    <div className='mb-5 flex justify-end'>
                        <div className='flex items-center space-x-1 border rounded-full px-3 py-1 w-fit '>
                            <Rocket className='w-4 h-4' />
                            <p className="font-bold text-sm inline-block">Starter</p>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl mb-3'>$19/ <span className='font-medium text-base'>month</span></h1>
                    <p className="font-light text-md mb-7">For individuals and small teams.</p>
                    <div className='text-center border p-2 rounded-lg'><a href="#">Get Started</a></div>
                    <div className='space-y-3 mt-4'>
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
                </div>


                <div className='flex flex-col max-w-xs p-12 border rounded-xl'>
                    <div className='mb-5 flex justify-end'>
                        <div className='flex items-center space-x-1 border rounded-full px-3 py-1 w-fit '>
                            <Rocket className='w-4 h-4' />
                            <p className="font-bold text-sm inline-block">Starter</p>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl mb-3'>$19/ <span className='font-medium text-base'>month</span></h1>
                    <p className="font-light text-md mb-7">For individuals and small teams.</p>
                    <div className='text-center border p-2 rounded-lg'><a href="#">Get Started</a></div>
                    <div className='space-y-3 mt-4'>
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
                </div>


                <div className='flex flex-col max-w-xs p-12 border rounded-xl'>
                    <div className='mb-5 flex justify-end'>
                        <div className='flex items-center space-x-1 border rounded-full px-3 py-1 w-fit '>
                            <Rocket className='w-4 h-4' />
                            <p className="font-bold text-sm inline-block">Starter</p>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl mb-3'>$19/ <span className='font-medium text-base'>month</span></h1>
                    <p className="font-light text-md mb-7">For individuals and small teams.</p>
                    <div className='text-center border p-2 rounded-lg'><a href="#">Get Started</a></div>
                    <div className='space-y-3 mt-4'>
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
                </div>
            </div>
        </div>
    )
}

export default Price
