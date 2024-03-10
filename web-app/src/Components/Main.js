import React from 'react'

export default function Main() {
    // Animates the details cards when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.details--hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
    
    return (
        <main className='main'>
            <section className='main--title'>
                <h1>Details</h1>
                <a href='./'><button>Learn More</button></a>
            </section>
            <section className='main--details'>
                <article className='details--cards details--hidden'>
                    <div>
                        <h2>Polyculture</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <img src={require('../Images/polyculture.jpg')} />
                </article>
                <article className='details--cards details--hidden'>
                    <img src={require('../Images/monoculture.jpg')} />
                    <div>
                        <h2>Monoculture</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    )
}