import React from 'react'
import Head from 'next/head'
import { FiCheckCircle } from 'react-icons/fi'

import { Anchor } from '../components/Anchor'
import { PageContainer } from '../components/PageContainer'

import {
  Container,
  Header,
  BenefitsArticle,
  TutorialArticle,
  ContainerOfTutorials,
  TutorialContainer
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Página Principal</title>
      </Head>
      <Container>
        <Header id="spotlight">
          <h1>OpenSource Courses</h1>

          <p>
            Cursos gratuitos de TI para toda comunidade, vamos democratizar
            nossos conhecimentos para construir um futuro melhor juntos.
          </p>

          <Anchor href="#benefits">Vamos juntos! ✊🏾</Anchor>
        </Header>
        <BenefitsArticle id="benefits">
          <h1>Vantagens</h1>
          <ul>
            <li>
              <FiCheckCircle /> Cursos gratuitos
            </li>
            <li>
              <FiCheckCircle /> Cursos em constante evolução
            </li>
            <li>
              <FiCheckCircle /> Para todos os níveis de programadores
            </li>
            <li>
              <FiCheckCircle /> Aprenda e contribua com a comunidade opensource
            </li>
            <li>
              <FiCheckCircle /> Melhore suas habilidades com git e markdown
            </li>
          </ul>

          <Anchor href="#tutorial">Partiu! 🚀</Anchor>
        </BenefitsArticle>
        <TutorialArticle id="tutorial">
          <h1>Contribuindo com o futuro de desenvolvedores</h1>
          <ContainerOfTutorials>
            <TutorialContainer>
              <h2>Para aprender</h2>
              <ol>
                <li>Acessar nosso repositório</li>
                <li>#NeverStopLearn</li>
              </ol>
            </TutorialContainer>
            <TutorialContainer>
              <h2>Para Contribuir</h2>
              <ol>
                <li>Acessar nosso repositório</li>
                <li>Realizar um fork do repositório</li>
                <li>Contribuir com seu PR</li>
                <li>#BuildTheFuture</li>
              </ol>
            </TutorialContainer>
          </ContainerOfTutorials>
          <Anchor
            href="https://github.com/odenirdev/opensources-courses"
            target="_black"
          >
            Acessar Repositório 📦
          </Anchor>
        </TutorialArticle>
      </Container>
    </PageContainer>
  )
}

export default Home
