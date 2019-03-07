import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled'
import colors from './colors';

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
        <NavLink to="/search-params"></NavLink>
    </Container>
);

export default NavBar;