
import React, { useState } from 'react';
import Styles from "./login-styles.scss";
import { Footer, FormStatus, Input, LoginHeader } from "../../components";
import Context from '@/presentation/contexts/form/form-context';


const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
  })
  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: '',

  })
  
  return (
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <Context.Provider value={{
        state,
        errorState
      }}>
        <form data-testid="form" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled type="submit">Entrar</button>
          <a data-testid="signup-link" href="/signup" className={Styles.link}>Criar conta</a>
          <FormStatus />

        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
