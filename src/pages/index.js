import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      padding: 10,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: '500px 2fr',
        gridTemplateRows: '40vh',
        gridRowGap: '10px',
        gridGap: '10px'
      }}>
        <div>Mapa</div>
        <div>Find Chapter</div>
      </section> 
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '25vh',
        gridGap: '10px'
      }}>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </section> 
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: '30vh',
        gridGap: '10px'
      }}>
        <div>About 1</div>
        <div>About 2</div>
      </section> 
    </div>
  </Layout>
)

export default IndexPage
