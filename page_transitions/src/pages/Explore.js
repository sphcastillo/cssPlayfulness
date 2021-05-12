import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/elephants.jpg";
import { motion } from "framer-motion";
import { animationThree } from "../animations/Animations";

function Explore() {
    return (
        <motion.div
            initial = "out"
            animate = "end"
            exit = "out"
            variants = {animationThree}
        > 
            <Header />
            <Hero 
                image = {Image} 
                title = "Save the Elephants"
                description = "Africa and Asian elephant populations are both at risk"
            />
            Text Below Image
        </motion.div>
    )
}

export default Explore;
