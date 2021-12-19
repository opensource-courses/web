import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 0 2.5rem;
`

export const Header = styled.header`
  width: 100%;
  max-width: 640px;
  min-height: calc(100vh - var(--header-height));

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0 0 2rem;
  }

  p {
    margin-bottom: 5rem;
  }
`

export const Article = styled.article`
  width: 100%;
  max-width: 640px;
  min-height: 100vh;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ul {
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }
`
export const BenefitsArticle = styled(Article)`
  h1 {
    margin-bottom: 3rem;
  }

  ul {
    margin-bottom: 3rem;

    li {
      svg {
        color: var(--primary);
      }
    }
  }
`

export const TutorialArticle = styled(Article)`
  display: flex;
  max-width: 900px;

  min-height: calc(100vh - var(--footer-height));

  h1 {
    width: 100%;
    font-size: 4rem;
    line-height: 3rem;
    margin-bottom: 6rem;

    @media (max-width: 576px) {
      font-size: 2.8rem;
    }
  }

  a {
    @media (max-width: 576px) {
      font-size: 1.8rem;
    }
  }

  h2 {
    @media (max-width: 576px) {
      font-size: 2.2rem;
    }
  }
`

export const ContainerOfTutorials = styled.div`
  display: flex;

  margin-bottom: 4rem;

  @media (max-width: 576px) {
    flex-direction: column;

    ol {
      margin-bottom: 2rem;
    }
  }
`

export const TutorialContainer = styled.div`
  margin-right: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  ol {
    li {
      margin-bottom: 0.5rem;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`
