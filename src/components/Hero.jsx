import React from 'react'
import { Play } from "lucide-react"
import Microsoft from '../assets/logos/microsoftmono.png'
import Framer from "../assets/logos/framermono.png"
import Instagram from "../assets/logos/instagrammono.png"
import Huawei from "../assets/logos/huaweimono.png"
import Mcdonalds from "../assets/logos/mcdeesmono.png"



const Hero = () => {
    return (
        <div className='min-h-screen px-3 py-25'>
            <div className='flex space-x-3 mb-7 justify-center items-center'>
                <p className='text-[15px] font-extralight'>Smart, Fast, Always Active.</p>
                <button className='text-[13px] tracking-tight border px-3 rounded-full text-base font-extralight'>Launch App</button>
            </div>

            <div className='mb-8 px-2 space-y-2 flex flex-col justify-center items-center'>
                <h1 className='text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Build, Deploy & Talk to AI</h1>
                <h1 className='text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Agents in Seconds.</h1>
            </div>

            <div className='mb-7 font-extralight  flex flex-col justify-center items-center'>
                <p className='text-center'>Design AI assistants that research, plan, and execute</p>
                <p className='text-center'>tasks - all powered by your prompts. </p>
            </div>

            <div className='mb-20 flex flex-col space-y-3 md:flex-row justify-center items-center max-w-2xl md:w-auto md:mx-auto md:space-y-0 md:space-x-10'>
                <button className='border w-full md:w-auto px-7 py-2 rounded-4xl text-[15px] font-semibold'>Create Agent</button>
                <button className='border w-full md:w-auto px-7 py-2 rounded-4xl flex gap-1 justify-center items-center'>
                    <Play className='w-4 h-4' />
                    <p className='text-[15px] font-semibold'>Watch Demo</p>
                </button>
            </div>

            <p className='mb-10 text-base font-extralight flex justify-center items-center'>Trusted by leading brands, including - </p>

            <div className='max-w-full px-6 overflow-x-hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center'>
                <div className='px-4 flex items-center'>
                    <img className='w-8 h-8 object-contain' src={Microsoft} alt="logo" />
                    <h1 className='text-lg font-semibold'>Microsoft</h1>
                </div>
                <div className='px-4 flex items-center'>
                    <img className='w-8 h-8 object-contain' src={Framer} alt="logo" />
                    <h1 className='text-lg font-semibold'>Framer</h1>

                </div>
                <div className='px-4 flex items-center'>
                    <img className='w-8 h-8 object-contain' src={Instagram} alt="logo" />
                    <h1 className='text-lg font-semibold'>Instagram</h1>

                </div>
                <div className='px-4 flex items-center'>
                    <img className='w-10 h-10 object-contain' src={Huawei} alt="logo" />
                    <h1 className='text-lg font-semibold'>Huawei</h1>

                </div>
                <div className='px-4 flex items-center'>
                    <h1 className='text-lg font-semibold'>Mcdonalds</h1>
                    <img className='w-8 h-8 object-contain' src={Mcdonalds} alt="logo" />
                </div>
            </div>

        </div>
    )
}

export default Hero
