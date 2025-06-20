
import React, { useEffect, useState } from 'react';
import Styles from "./login-styles.scss";
import { Footer, FormStatus, Input, LoginHeader } from "../../components";
import Context from '@/presentation/contexts/form/form-context';
import { Validation } from '@/presentation/protocols/validation';

type Props = {
  validation: Validation
}
const Login: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: '',
  })


  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <Context.Provider value={{
        state,
        setState
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
