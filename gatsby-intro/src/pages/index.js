import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Hero from "../components/hero"
import Insta from "../components/insta"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
          // <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
        <Insta />
      </Layout>
    </>
  )
}

export default IndexPage
