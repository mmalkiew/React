import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const PostTemplate = () => (
    <Layout>
        <h1>post title</h1>
        <p css={css`font-size: 0.75rem;`}>Post Author</p>
        <p>post boyd</p>
        <ReadLink to="/"> back to all posts</ReadLink>
    </Layout>
);

export default PostTemplate;