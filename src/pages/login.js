import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/Login"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <div style={{
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
        gridGap: '10px',
        padding: '3rem 3.625rem'
      }} className="login-card">
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
        <button type="submit" className="primary d-block">Log in</button>
        <button type="button" className="secondary d-block">Sign up</button>
        </form>
      </section>
    </div>
  </Layout>
)

export default LoginPage
