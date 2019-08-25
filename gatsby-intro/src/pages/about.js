import React from "react"
import { Link } from "@reach/router"
import Layout from "../components/layout"

export default () => (
  <>
    <Layout>
      <h1>About me!</h1>
      <p>This is my personal website!</p>

      <Link to="/">Home</Link>
    </Layout>
  </>
)
