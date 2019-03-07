import React from 'react';
import { Link } from '@reach/router';
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import colors from './colors';

const Spin = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transfrom: rotate(360deg)
    }
`;

const SpyGlass = styled("span")`
    display: inline-block;
    animation: 1s ${Spin} linear infinite;
    color: red;
`;

//  templete literal example
const Container = styled("header")`
    background-color: ${colors.dark};
    position: sticky;
    top: 0;
    z-index: 10;
`;

const NavLink = styled(Link)`
    &:hover {
        text-decoration: underline
    }
`;

const NavBar = () => (
    <Container>
        <NavLink to="/">Adopt me!</NavLink>
        <NavLink to="/search-params">
            <SpyGlass aria-label="search" role="img">
                TEST
            </SpyGlass>
        </NavLink>
    </Container>
);

export default NavBar;