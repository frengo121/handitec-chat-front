import React from 'react'

import Header from '../components/Header'
import { Content, GlobalStyle } from './style'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
    </>
  )
}

export default Layout
