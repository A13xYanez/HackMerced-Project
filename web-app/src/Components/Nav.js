import React from 'react'

export default function Nav() {
    return (
        <nav className='navbar'>
            <img className='navbar--image' src={require('../Images/logo.png')} />
            <ul className='navbar--links'>
                <li><a href='/'>Home</a></li>
                <li><a href='./'>Learn More</a></li>
                <li><a href='./'>Simulation</a></li>
            </ul>
        </nav>
    )
}