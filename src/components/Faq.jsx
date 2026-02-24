import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Faq = () => {
    const [open, setOpen] = useState(false)
    function handleClick(index) {
        setOpen(prev => (prev === index ? null : index))
    }
    return (
        <div className='bg-red-300 p-10 mt-30 flex flex-col justify-center items-center'>
            <div className='text-center space-y-4 mb-4'>
                <h1 className="text-3xl font-semibold">FAQ's</h1>
                <h3 className="font-light text-sm">Looking for answers to your frquently asked questions? Check
                    <br />
                    out our FAQ's section below. </h3>
            </div>


            <div className='bg-slate-300 p-3 mb-1 rounded-lg flex justify-between gap-30 items-center' onClick={() => handleClick(1)}>
                <h1>Do I need coding or design experince to use kojo?</h1>
                {open === 1 ? (<ChevronUp />) : (<ChevronDown />)}
            </div>
            {open === 1 && (
                <h1>Basic coding knowledge (HTML/CSS, Tailwind) helps, but advanced design
                    <br />
                    skills aren't required. You can use components as-is or customize them.</h1>
            )}


            <div>
                <div className='bg-slate-300 p-3 mb-1 rounded-lg flex justify-between gap-30 items-center' onClick={() => handleClick(2)}>
                    <h1>What is kojo and how does it helps developers?</h1>
                    {open === 2 ? (<ChevronUp />) : (<ChevronDown />)}
                </div>
                {open === 2 && (
                    <h1>kojo provides ready-to-use, customizable UI components. and
                        <br />
                        templates, saving time fro developers.</h1>
                )}
            </div>

            <div>
                <div className='bg-slate-300 p-3 mb-1 rounded-lg flex justify-betwee gap-30 items-center' onClick={() => handleClick(3)}>
                    <h1>Can I use kojo components in my existing project?</h1>
                    {open === 3 ? (<ChevronUp />) : (<ChevronDown />)}
                </div>
                {open === 3 && (
                    <h1>Yes, components can be intergrated with HTML, React and Next.js, Vue
                        <br />
                        and other projects using Tailwind CSS.</h1>
                )}
            </div>

            <div>
                <div className='bg-slate-300 p-3 mb-1 rounded-lg  flex justify-between gap-30 items-center' onClick={() => handleClick(4)}>
                    <h1>Does kojo suppot team collaboration?</h1>
                    {open === 4 ? (<ChevronUp />) : (<ChevronDown />)}
                </div>
                {open === 4 && (
                    <h1>There is no clear documentation on built-in collaboration features. Check
                        <br />
                        the support system for details.</h1>
                )}
            </div>

            <div>
                <div className='bg-slate-300 p-3 mb-1 rounded-lg flex justify-between gap-30 items-center' onClick={() => handleClick(5)}>
                    <h1>Can I kojo before purchasig a plan?</h1>
                    {open === 5 ? (<ChevronUp />) : (<ChevronDown />)}
                </div>
                {open === 5 && (
                    <h1>Yes. You can try kojo with full access to all the features.</h1>
                )}
            </div>

        </div>
    )
}

export default Faq
