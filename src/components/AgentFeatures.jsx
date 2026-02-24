import React from 'react'
import { Bot, Zap, Brain } from 'lucide-react'

const AgentFeatures = () => {
    return (
        <div className=' grid justify-items-center items-center gap-20 py-5'>
            <div className="flex flex-col justify-center items-center">
                <hi className="mb-5 font-semibold text-4xl">Agent Features</hi>
                <p className="text-m font-medium text-center">Design AI assistants that research, plan, and execute tasks - all
                    <br />
                    powered by your prompts.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 px-7">
                <div className='border rounded-xl p-6 space-y-3'>
                    <Bot className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Autonomous Agents</h2>
                    <h3 className="text-m text-light">Agents that plan, execute & think <br /> step-by-step.</h3>
                </div>

                <div className='border rounded-xl p-6 space-y-3'>
                    <Brain className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Memeory Learning</h2>
                    <h3 className="text-m text-light">Agent retain memory and improve <br /> overtime.</h3>
                </div>

                <div className="border rounded-xl p-6 space-y-3">
                    <Zap className='w-10 h-10' />
                    <h2 className="text-m font-semibold">Real-time Execution</h2>
                    <h3 className="text-m text-light">Fast responses with async task <br /> processing.</h3>
                </div>
            </div>

            <div className="grid justify-items-center items-center">
                <h1 className="mb-5 font-bold text-center text-3xl">From idea to autonomous agent 
                    <br />
                    quicklyand effortlessly.</h1>
                <p className="text-m text-center font-medium">Empower your business with AI agents that optimize processes
                    <br />
                     and accelerate performance.</p>
            </div>


        </div>
    )
}

export default AgentFeatures
