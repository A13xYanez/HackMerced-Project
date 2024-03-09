import React from 'react'

export default function Nav() {
    return (
        <nav className='navbar'>
            <h1 className='navbar--image'>Logo</h1>
            <ul className='navbar--links'>
                <li><a href='/'>Home</a></li>
                <li><a href='./'>Learn More</a></li>
                <li><a href='./'>Play</a></li>
            </ul>
        </nav>
    )
}