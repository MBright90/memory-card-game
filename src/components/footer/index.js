import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import React from 'react'

import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.container} role="contentinfo">
      <a className={style.footerLink} href="https://github.com/MBright90/memory-card-game">
        <FontAwesomeIcon icon={faGithub} role="img" /> MBright90
      </a>
    </footer>
  )
}

export default Footer
