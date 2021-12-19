import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --font: ${props => props.theme.font};

  --primary: ${props => props.theme.colors.primary};
  --secundary: ${props => props.theme.colors.secundary};

  --white: ${props => props.theme.colors.white};
  --black: ${props => props.theme.colors.black};

  --header-height: 12vh;
  --footer-height: 14vh;

  font: 400 16px Roboto, sans-serif;

  @media (max-width: 768px) {
    font-size: 10px;
  }
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body, #__next {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1 {
    background: -webkit-linear-gradient(0deg, #42A539 30%, #56C5FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    font-variant: small-caps;
  }

  h2 {
    font-size: 3rem;
    font-variant: small-caps;
  }

  p {
    font: 400 1.7rem var(--font);
  }

  ul {
    list-style: none;
  }

  ul, ol {
    font: 400 1.7rem var(--font);
    padding-left: 1.8em;

  }


`
