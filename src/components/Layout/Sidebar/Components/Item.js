import {
  FlexCenterCSS,
  HoverBoxCSS,
  RotateAnimation,
} from '../../../../styles/common'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import Icons from '../../../Icons/Icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'

export default function MenuItem({ item }) {
  const { icons, title, url, contents } = item

  const location = useLocation()
  const nowTitle = location.pathname.split('/')[1] // 현재 url 상 title ( '' | 'user' | 'order' | 'stock' )
  const isNowTitle = url === nowTitle

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isOpenToggle, setIsOpenToggle] = useState(isNowTitle) // 현재 title과 일치하다면 토굴이 처음부터 열려있도록

  useEffect(() => {
    setIsOpenToggle(isNowTitle)
  }, [isNowTitle])

  const onClickTitle = () => {
    if (contents.length === 0) {
      return navigate(url)
    }
    setIsOpenToggle((prev) => !prev)
  }

  const onClickPage = (path) => {
    navigate(path)
  }

  return (
    <S.Wrapper>
      <S.ItemWrap
        onClick={onClickTitle}
        isthispage={url === pathname}>
        <span>{icons}</span>
        <span>{title}</span>
        {contents.length > 0 && (
          <S.AnimatedIcons
            name={faChevronDown}
            isopen={isOpenToggle}
            size='2xs'
          />
        )}
      </S.ItemWrap>
      <S.ContentWrap>
        {isOpenToggle &&
          contents.map(({ page, path }) => (
            <S.Content
              key={path}
              onClick={() => onClickPage(path)}
              isthispage={path === pathname}>
              {page}
            </S.Content>
          ))}
      </S.ContentWrap>
    </S.Wrapper>
  )
}

const Wrapper = styled.div``

const ItemWrap = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: ${({ theme, isthispage }) =>
    isthispage && theme.COLOR.hover};

  &:hover {
    ${HoverBoxCSS}
  }
`

const AnimatedIcons = styled(Icons)`
  margin-left: auto;
  transition: transform 0.4s ease;
  transform: ${({ isopen }) => (isopen ? 'rotate(180deg)' : 'rotate(0deg)')};

  &:active {
    animation: ${RotateAnimation} 0.3s linear;
  }
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.common.gray[200]};
`

const Content = styled.div`
  height: 3.5rem;
  width: 100%;
  ${FlexCenterCSS}
  font-size: 1.4rem;
  background-color: ${({ theme, isthispage }) =>
    isthispage && theme.COLOR.hover};

  &:hover {
    ${HoverBoxCSS}
  }
`

const S = { Wrapper, ItemWrap, ContentWrap, AnimatedIcons, Content }
