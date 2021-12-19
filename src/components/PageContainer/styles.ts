import styled from 'styled-components'

export const Container = styled.div`
  background: url('/background.webp');
  background-attachment: fixed;
  background-size: 100%;

  @media (max-width: 992px) {
    background-size: cover;
  }
`

export const Main = styled.main``
