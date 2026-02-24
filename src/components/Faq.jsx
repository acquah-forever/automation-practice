import React, { useState } from 'react'
import { ChevronDown,ChevronUp } from 'lucide-react'

const Faq = () => {
    const [open, setOpen] = useState(false)
    function handleClick(index){
        setOpen(prev => (prev === index ? null : index))
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold">FAQ's</h1>
                <h3 className="font-light text-sm">Looking for answers to your frquently asked questions? Check
                    <br />
                    out our FAQ's section below. </h3>
            </div>

            <div className='bg-slate-300 p-3 mb-1 rounded-lg max-w-xl flex justify-between items-center'onClick={() => handleClick(1)}>
                <h1>Do I need coding or design experince to use kojo?</h1>
                {open === 1 ? (<ChevronUp />) : (<ChevronDown />)}
            </div>
            {open === 1 && (
                <h1>Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design
                    <br />
                    skills aren't required. You can use components as-is or customize them.</h1>
            )}
        </div>
    )
}

export default Faq
