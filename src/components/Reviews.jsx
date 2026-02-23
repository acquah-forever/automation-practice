import React from 'react'

const Reviews = (props) => {
  return (
    <div>
        <h1 className="font-bold text-3xl text-center">Here what out Trusted Users had to say about our AI Agents.</h1>
        <h3 className="font-light text-m text-center">empower your business with AI agents that optimize process <br /> and accelerate performance.</h3>
        <div>
            <h2></h2>{props.title}
            <p className='whitespace-pre-line'></p>{props.review}
            <p></p>{props.name}
        </div>
      
    </div>
  )
}

export default Reviews
