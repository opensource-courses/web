import React from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

import { Container, Main } from './styles'

export const PageContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
