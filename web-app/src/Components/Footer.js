import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer--image' src={require('../Images/logo.png')} />
            <div className='footer--links'>
                <h2>Links</h2>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Learn More</a></li>
                    <li><a>Simulation</a></li>
                </ul>
            </div>
        </footer>
    )
}