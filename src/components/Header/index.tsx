import React from 'react'

import { Container, Grid } from './styles'

export const Header: React.FC = () => {
  return (
    <Container id="header">
      <Grid>
        <a href="#" className="logo">
          <img src="/logo.webp" alt="OpenSource Courses" />
        </a>

        <ul>
          <li>
            <a href="#spotlight">Ínicio</a>
          </li>
          <li>
            <a href="#benefits">Vantagens</a>
          </li>
          <li>
            <a href="#tutorial">Acessar</a>
          </li>
        </ul>
      </Grid>
    </Container>
  )
}
