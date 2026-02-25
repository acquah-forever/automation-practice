import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
    return (
        <div className='mt-20 flex flex-col justify-center items-center space-y-5'>
            <div className='cursor-pointer flex items-center space-x-2'>
                <h1 className='bg-orange-500 px-4 py-1 w-10 text-center text-white rounded text-2xl font-semibold'>k</h1>
                <h1 className='text-2xl font-semibold'>Kojo</h1>
            </div>

            <div className='flex space-x-4 items-center'>
                <h1 className="font-light text-sm">Terms of Service</h1>
                <h1 className="font-light text-sm">Privacy Policy</h1>
                <h1 className="font-light text-sm">Security</h1>
                <h1 className="font-light text-sm">Sitemap</h1>
            </div>

            <div className='flex space-x-4 items-center'>
                <Linkedin />
                <Twitter />
                <Github />
            </div>
            <div className='px-12 text-center mt-4 pt-2 border-t border-t-slate-300 flex flex-col justify-center items-center  md:flex-row md:space-x-30 md:items-center md:justify-center'>
            <h1 className="font-light text-sm">Build AI agents for free</h1>
            <h1 className="text-sm font-light">Copyright © 2026. Built by Kojo. All Rights Reserved </h1>
            </div>
        </div>
    )
}

export default Footer
