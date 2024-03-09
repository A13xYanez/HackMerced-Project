import React from 'react'

export default function Main() {
    return (
        <main className='main'>
            <section className='main--title'>
                <h1>Details</h1>
                <a href='./'><button>Learn More</button></a>
            </section>
            <section className='main--details'>
                <article className='details--polyculture'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <img src='../Images/polyculture.jpg' />
                </article>

            </section>
        </main>
    )
}