import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className='p-15 border rounded-xl w-4xl flex flex-col items-center justify-center text-center space-y-3'>
        <h1 className="text-3xl font-medium">Ready to build?</h1>
        <p className="text-sm font-medium">See how you can turn your ideas into reality. Get statrted for
            <br />
            free, no credit card required.
        </p>
        <button className="mt-7 flex border rounded-4xl items-center justify-center px-7 py-2 space-x-2">
            <h1>Try now</h1>
            <ArrowRight className='w-4 h-4' />
        </button>
      
    </div>
  )
}

export default CTA
