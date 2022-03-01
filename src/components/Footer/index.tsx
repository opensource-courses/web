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
          Criado por <a href="https://github.com/odenirdev">Odenir Gomes</a>.{' '}
          <a href="https://github.com/felipe-gomes-vicente">
            Felipe Gomes Vicente
          </a>{' '}
          contribuiu com seu conhecimento.
        </p>

        <div />

        <Link className="gotoTop" href="#header">
          <FiChevronUp />
        </Link>
      </Grid>
    </Container>
  )
}
