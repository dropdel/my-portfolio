import * as React from "react"
import Layout from "../components/layout"
import HomePage from "../components/homepage"
// markup
const IndexPage = () => (
  <main style={{height: '100%'}}>
    <Layout pageTitle="Home"> 
    <HomePage></HomePage>
    </Layout>
  </main>
)

export default IndexPage
