import Logo from '../logo/logo'
import Styles from './login-header.scss'

import React, { memo } from 'react'


const LoginHeader: React.FC = () => {

  return (
     <header className={Styles.headerWrap}>
        <Logo/>
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
  )
}

export default memo(LoginHeader)