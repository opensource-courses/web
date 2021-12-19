import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  backdrop-filter: blur(3px);
  box-shadow: 0 0 5px #000;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: var(--header-height);

  img {
    width: 100%;
    max-width: 4rem;
    height: auto;

    @media (max-width: 768px) {
      max-width: 6rem;
    }
  }
`

export const Grid = styled.div`
  width: 100%;
  max-width: 1080px;

  padding: 0 2rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
  }

  .logo {
    position: absolute;
    left: 2rem;

    @media (max-width: 768px) {
      position: initial;
      margin: 0 0 2rem;
    }
  }

  ul {
    li {
      display: inline;

      margin-right: 1rem;

      a {
        font-size: 1.5rem;
        text-transform: uppercase;

        text-decoration: none;
        color: var(--white);
      }
    }
  }
`
