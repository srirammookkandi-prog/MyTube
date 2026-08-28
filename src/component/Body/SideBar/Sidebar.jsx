import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.toggleSidebar.isMenuOpen)
    if (!isMenuOpen) return null;
    return (
        <div className='shadow-lg px-5 py-4 w-44'>
            <ul>
                <li>Home</li>
                <li>video</li>
                <li>Live</li>
                <li>Videos</li>
            </ul>
            <h1 className='font-bold mt-4'>Subscription </h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold mt-4'>Watch later </h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar
