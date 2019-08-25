import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <p>post boyd</p>
    <ReadLink to="/"> back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate
