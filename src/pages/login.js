import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <div style={{
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <section style={{
        display: 'flex',
        gridTemplateColumns: '500px 2fr',
        gridTemplateRows: '40vh',
        flexDirection: 'column',
        gridRowGap: '10px',
        gridGap: '10px'
      }}>
        <h1>Log in</h1>
        <form>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <a href="">Forgot password</a>
        <button type="submit">Log in</button>
        <button type="button">Sign up</button>
        </form>
      </section>
    </div>
  </Layout>
)

export default LoginPage
