import Link from 'next/link'
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
            <a
              href="https://blog-opensourcecourses.notion.site/Open-source-Courses-1e3bde73c5eb416e903b21172f37cf90"
              target="_blank"
              rel="noreferrer"
            >
              🏗️ Plataforma
            </a>
          </li>
          <li>
            <a href="#tutorial">Github</a>
          </li>
        </ul>
      </Grid>
    </Container>
  )
}
