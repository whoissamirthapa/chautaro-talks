import React from 'react'

import classes from './Home.module.css';
import HomeBase from '../../components/HomeBase/HomeBase';

function Home() {
    return (
        <HomeBase>
            <header style={{textAlign: "center", fontSize: "2rem"}}>Hello how are you</header>
            <section className={classes.description__home}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos illum perspiciatis eius unde illo saepe blanditiis quis adipisci error?</section>
        </HomeBase>
    )
}

export default Home
