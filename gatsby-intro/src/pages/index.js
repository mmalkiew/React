import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts";

const IndexPage = () => {

  const posts = usePosts();

  return (
    <Layout>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}


export default IndexPage
