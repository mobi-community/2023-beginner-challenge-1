import { useLocation, useNavigate } from 'react-router'
import {
  FlexCenterCSS,
  HoverBoxCSS,
  RotateAnimation,
} from '../../../../styles/common'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { styled } from 'styled-components'
import Icons from '../../../Icons/Icons'

export default function MenuItem({ item }) {
  const navigate = useNavigate()
  const location = useLocation()

  const { icons, title, contents } = item
  const [isOpenToggle, setIsOpenToggle] = useState(false)

  const onClickTitle = () => {
    setIsOpenToggle((prev) => !prev)
  }

  const onClickPage = (path) => {
    navigate(path)
  }

  return (
    <S.Wrapper>
      <S.ItemWrap onClick={onClickTitle}>
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
              isthispage={path === location.pathname}>
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
