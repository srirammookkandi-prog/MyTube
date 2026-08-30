import React from 'react'

const Comments = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex bg-gray-200 rounded-lg shadow-sm p-2 my-2'>
            <img className='h-12 w-12 mx-2' alt='user image' src='https://cdn-icons-png.flaticon.com/512/17/17004.png' />
            <div>
                <p className='font-bold text-lg'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comments
