import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';


const ImageBackground = styled('div')`
    background-image: url('/sample.jpg');
    background-position: top 20% center;
    background-size: cover;
    height: 50vh;

    + * {
        margin-top: 0;
    }
`;

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    // #ddbbffdd - it's a alpha channell
    // #ddbbff00 = it's a zero opacity
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`;

// it's react component
const Hero = () => {

    return (
        <ImageBackground>
            <TextBox>


                <h1>Gatsby Example</h1>
                <p>
                    Hello <Link to="/about">Learn about &rarr;</Link>
                </p>
            </TextBox>
        </ImageBackground>

    )
};

export default Hero;