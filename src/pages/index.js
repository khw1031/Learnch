import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function IndexPage() {
  return (
    <Layout>
      <h1>Learnch</h1>
      <p>
        <Link to="/about/">About</Link>
      </p>
    </Layout>
  )
}

export default IndexPage