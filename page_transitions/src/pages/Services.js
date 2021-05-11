import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Elephants from "../images/elephants.jpg";

function Services() {
    return (
        <>  
            <Header />
            <Hero image={Elephants} />
            <h1>Services</h1>
        </>
    )
}

export default Services
