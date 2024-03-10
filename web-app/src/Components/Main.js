import React from 'react'

export default function Main() {
    return (
        <main className='main'>
            <section className='main--title'>
                <h1>Details</h1>
                <a href='./'><button>Learn More</button></a>
            </section>
            <section className='main--details'>
                <article className='details--cards'>
                    <div>
                        <h2>Polyculture</h2>
                        <p>
                            Polyculture planting is the practice of simultaneously growing different crops at once in the same area, promoting biodiversity and ecological balance. By practicing polyculture and pairing complementary plants, they won’t have to battle for the same resources and nutrients and mimic natural vegetation to help the soil be more sustainable. Our simulation demonstrates the benefits of polyculture, its role in improving soil health, reducing pests, and increasing crop yield over time. 
                        </p>
                    </div>
                    <img src={require('../Images/polyculture.jpg')} />
                </article>
                <article className='details--cards'>
                    <img src={require('../Images/monoculture.jpg')} />
                    <div>
                        <h2>Monoculture</h2>
                        <p>
                            Monoculture involves cultivating a single crop species at a time in a specific area, a method often used for its short-term efficiency and economic benefits. This lets farmers specialize and focus on one crop at a time, understand what it needs to thrive and not worry about different planting schedules and harvest times. However, this practice can lead to soil degradation, increased vulnerability to pests, and a reliance on chemical fertilizers and pesticides. Our simulation demonstrates the challenges and impacts of monoculture farming, and its effects on the environment and agricultural sustainability.
                        </p>
                    </div>
                </article>
            </section>
            <section className='main--mission'>
                <h1>Mission Statement</h1>
                <p>
                    Our mission with this simulation is to teach the world about the complexities and rewards of sustainable agriculture, teaching them the nuances of crop cultivation, seasonal farming practices, the ecological impacts of their farming choices, and optimizing their profits. Through the simple yet educational mechanics, we aim to highlight the importance of the differences between polyculture and monoculture, demonstrating how diverse crop planting can lead to healthier soil and more sustainable farming outcomes in the long term. We also intend to teach players about how to optimize the amount of money they are making through agriculture with the simple resource-management aspect of our simulation.  Our goal is to foster a better understanding and appreciation for real-world agricultural challenges, encouraging players to consider the environmental and ecological consequences of their farming strategies, thereby promoting more sustainable practices both in-simulation and in the real world.
                </p>
            </section>
        </main>
    )
}