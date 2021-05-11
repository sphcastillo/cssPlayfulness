import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import PolarBear from "../images/polarbear.jpg";

function About() {
    return (
        <>
            <Header />
            <Hero image={PolarBear} />
            <h1>About</h1>
        </>
    )
}

export default About;
