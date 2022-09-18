import React, { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import axios from 'axios'

import { Anchor } from '../Anchor'

import * as S from './styles'

interface Contributor {
  src: string
  avatar: string
}

export const Footer: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])

  const parseContributor = (value: any) => {
    return {
      avatar: value.avatar_url,
      src: value.html_url
    }
  }

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        'https://api.github.com/repos/opensource-courses/courses/contributors'
      )
      const serializedContributors = response.data.map(value =>
        parseContributor(value)
      )

      setContributors(serializedContributors)
    })()
  }, [])

  return (
    <S.Container>
      <S.Grid>
        <a href="#">
          <img src="/logo.webp" className="logo" />
        </a>

        <S.ContributorsList>
          {contributors.map((contributor, index) => (
            <a
              key={index}
              href={contributor.src}
              target="_blank"
              rel="noreferrer"
            >
              <S.Contributor src={contributor.avatar} />
            </a>
          ))}
        </S.ContributorsList>

        <p>MIT License (c) 2022 Opensource Courses</p>

        <Anchor className="gotoTop" href="#header">
          <FiChevronUp />
        </Anchor>
      </S.Grid>
    </S.Container>
  )
}
