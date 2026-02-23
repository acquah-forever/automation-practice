import React from 'react'

const Reviews = (props) => {
  return (
    <div>
        <div>
            <h2></h2>{props.title}
            <img src={props.image} alt="un" />
            <p className='whitespace-pre-line'></p>{props.review}
            <p></p>{props.name}
        </div>
      
    </div>
  )
}

export default Reviews
