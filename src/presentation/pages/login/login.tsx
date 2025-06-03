
import { Link } from "react-router-dom";
import Styles from "./login-styles.scss";
import React from 'react'
import Spinner from "./components/spinner/spinner";
import Logo from "./components/logo/logo";


const Login: React.FC = () => {

  return (
    <div className={Styles.loginWrap}>
      <header className={Styles.headerWrap}>
      <Logo/>
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
      <form data-testid="form" className={Styles.form}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button data-testid="submit"  type="submit">Entrar</button>
        <Link data-testid="signup-link" to="/signup" className={Styles.link}>Criar conta</Link>
        {/* <FormStatus /> */}
        <Spinner/>
      </form>
       <footer className={Styles.footer} />
    </div>
  )
}

export default Login
