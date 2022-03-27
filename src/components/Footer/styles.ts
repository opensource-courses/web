import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  min-height: var(--footer-height);

  backdrop-filter: blur(3px);
  box-shadow: 0 0 5px #000;

  a {
    color: var(--secundary);
  }

  .logo {
    height: 3.5rem;
  }

  .gotoTop {
    transform: translateY(-50%);

    position: absolute;
    right: 2rem;
    top: 0;

    width: 42px;
    height: 42px;

    color: var(--white);
    background: var(--primary);
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      margin: 2rem 0;
      font-size: 1.3rem;
    }
  }
`

export const Grid = styled.div`
  width: 100%;
  max-width: 1080px;

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;

    .logo {
      height: 64px;

      margin-bottom: 2rem;
    }
  }
`

export const ContributorsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin: 0.2rem;
  }
`

export const Contributor = styled.img`
  object-fit: contain;

  width: 42px;
  height: 42px;

  border-radius: 21px;
`
