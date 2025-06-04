import Styles from "./footer.scss"
import React, { memo } from 'react'


const Footer: React.FC = () => {
 
  return (
       <footer className={Styles.footer} />

  )
}

export default memo(Footer)