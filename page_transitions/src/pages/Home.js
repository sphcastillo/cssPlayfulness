import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/gorilla.jpg";
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations/Animations';

function Home() {
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={animationOne}
                transition={transition}
            >
                <Header />
                <Hero 
                    image = {Image} 
                    title = "Save the Great Apes" 
                    description = "Lowland Gorillas need our help"
                />
            </motion.div>
        </>
    )
}

export default Home;
