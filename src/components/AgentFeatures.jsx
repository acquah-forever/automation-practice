import React from 'react'
import { Bot, Zap, Brain } from 'lucide/react'

const AgentFeatures = () => {
    return (
        <div>
            <hi className="font-smeibold text-2xl">Agent Features</hi>
            <p className="text-sm font-light">Design AI assistants that research, plan, and execute tasks - all powered by your prompts.</p>
            <div className="">
                <Bot />
                <h2 className="text-m font-semibold">Autonomous Agents</h2>
                <h3 className="text-m text-light">Agents that plan, execute & think step-by-step.</h3>
                <Brain />
                <h2 className="text-m font-semibold">Memeory Learning</h2>
                <h3 className="text-m text-light">Agent retain memoryandimprove overtime.</h3>
                <Zap />
            </div>
            <h1 className="font-semibold text-2xl">From idea to autonomous agent quicklyand effortlessly.</h1>
            <p className="text-sm font-light">Empower your business with AI agents that optimize processes and accelerate performance.</p>


        </div>
    )
}

export default AgentFeatures
