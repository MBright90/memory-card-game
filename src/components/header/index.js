import HelpLink from '@components/helpLink'
import Scoreboard from '@components/scoreboard'
import React from 'react'

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.container}>
      <HelpLink />
      <h1 className={style.siteTitle}>MIND TRAINING</h1>
      <Scoreboard />
    </header>
  )
}

export default Header
