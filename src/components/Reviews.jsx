import React from 'react'

const Reviews = (props) => {
    return (
        <div className='border rounded-2xl p-7'>
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-md font-bol'>{props.title}</h2>
                    <div>
                        <img className='w-10 h-10 rounded-full object-cover' src={props.image} alt="un" />
                    </div>
                </div>
                <p className='whitespace-pre-line font-medium text-sm'>{props.review}</p>
                <p className='text-sm font-light'>{props.name}</p>
            </div>

        </div>
    )
}

export default Reviews
