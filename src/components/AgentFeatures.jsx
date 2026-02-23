import React from 'react'
import { Bot, Zap, Brain } from 'lucide-react'

const AgentFeatures = () => {
    return (
        <div className='min-h-screen grid justify-items-center items-center'>
            <div className="flex flex-col justify-center items-center">
                <hi className="mb-5 font-semibold text-2xl">Agent Features</hi>
                <p className="text-m font-light text-center">Design AI assistants that research, plan, and execute tasks - all
                    <br />
                    powered by your prompts.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-10">
                <div className='border rounded-xl p-6 space-y-3'>
                    <Bot className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Autonomous Agents</h2>
                    <h3 className="text-m text-light">Agents that plan, execute & think step-by-step.</h3>
                </div>

                <div className='border rounded-xl p-6 space-y-3'>
                    <Brain className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Memeory Learning</h2>
                    <h3 className="text-m text-light">Agent retain memory and improve overtime.</h3>
                </div>

                <div className="border rounded-xl p-6 space-y-3">
                    <Zap className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Real-time Execution</h2>
                    <h3 className="text-m text-light">Fast responses with async task processing.</h3>
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold text-2xl">From idea to autonomous agent quicklyand effortlessly.</h1>
                <p className="text-sm font-light">Empower your business with AI agents that optimize processes and accelerate performance.</p>
            </div>


        </div>
    )
}

export default AgentFeatures
