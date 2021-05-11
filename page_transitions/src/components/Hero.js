import React from 'react';
import styled from 'styled-components';


const HeroSection = styled.div`

    background: url(${({ image }) => image && image}) center;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`;

const Container = styled.div`

    color: #fff;
    padding: 2rem;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.4);
    margin: 1rem;
    border-radius: 10px;

    h1 {

        font-size: clamp(1rem, 6vw, 3.5rem);
        margin-bottom: 0.5rem;
    }

    p {

        font-size: clamp(0.75rem, 4vw, 1rem);
        margin-bottom: 1rem;
    }

    button {

        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: white;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;

    }
`;



function Hero({ image, title, description }) {
    return (
        <HeroSection image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Learn more</button>
            </Container>
        </HeroSection>
    )
}

export default Hero;
