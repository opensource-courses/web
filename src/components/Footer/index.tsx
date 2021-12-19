import React from 'react'
import { FiChevronUp } from 'react-icons/fi'

import { Link } from '../../components/Link'

import { Container, Grid } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Grid>
        <a href="#">
          <img src="/logo.webp" className="logo" />
        </a>

        <p>
          Criado por <a href="https://github.com/odenirdev">Odenir Gomes</a>
        </p>

        <div />

        <Link className="gotoTop" href="#header">
          <FiChevronUp />
        </Link>
      </Grid>
    </Container>
  )
}
