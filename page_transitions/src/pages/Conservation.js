import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/polarbear.jpg";
import { motion } from 'framer-motion';
import { animationTwo } from '../animations/Animations';

function Conservation() {
    return (
        <motion.div
            initial = "out"
            animate = "in"
            exit = "out"
            variants = {animationTwo}
        >
            <Header />
            <Hero 
                image = {Image}
                title = "Save the Polar Bears"
                description = "Habitat destruction is an issue polar bears are facing"
            />
            
        </motion.div>
    )
}

export default Conservation;
