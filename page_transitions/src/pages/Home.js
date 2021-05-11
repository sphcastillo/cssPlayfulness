import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gorilla from "../images/gorilla.jpg";

function Home() {
    return (
        <>
            <Header />
            <Hero 
                image = {Gorilla} 
                title = "Save the Great Apes" 
                description = "Lowland Gorillas need our help"
            />
        </>
    )
}

export default Home;
