
import React from 'react';
import { Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import FormStatus from "./components/form-status/form-status";
import Input from "./components/input/input";
import Header from "./components/login-header/login-header";
import Styles from "./login-styles.scss";



const Login: React.FC = () => {

  return (
    <div className={Styles.loginWrap}>
      <Header/>
      <form data-testid="form" className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button data-testid="submit"  type="submit">Entrar</button>
        <Link data-testid="signup-link" to="/signup" className={Styles.link}>Criar conta</Link>
        <FormStatus />
        
      </form>
      <Footer/>
    </div>
  )
}

export default Login
