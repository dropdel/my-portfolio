import * as React from "react"
import Layout from "../components/layout"
import AboutContent from "../components/about-content"
// markup
const About = () => (
  <main style={{height: '100%'}}>
    <Layout pageTitle="About"> 
        <AboutContent></AboutContent>
    </Layout>
  </main>
)

export default About
