import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className="bg-gray-300 px-4 py-1 m-2 rounded-xl">{name}</button>
        </div>
    )
}
export default Button
