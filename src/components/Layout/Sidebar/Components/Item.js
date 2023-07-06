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
  const { icons, title, contents } = item
  const [isOpenToggle, setIsOpenToggle] = useState(false)

  const onClickTitle = () => {
    setIsOpenToggle((prev) => !prev)
  }

  return (
    <S.Wrapper>
      <S.ItemWrap onClick={onClickTitle}>
        <span>{icons}</span>
        <span>{title}</span>
        {contents.length > 0 && (
          <S.AnimatedIcons
            name={faChevronDown}
            isOpen={isOpenToggle}
            size='2xs'
          />
        )}
      </S.ItemWrap>
      <S.ContentWrap>
        {isOpenToggle &&
          contents.map((content) => <div key={content}>{content}</div>)}
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
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

  &:active {
    animation: ${RotateAnimation} 0.3s linear;
  }
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.COLOR.common.gray[200]};

  & > div {
    height: 3rem;
    width: 100%;
    ${FlexCenterCSS}

    font-size: 1.4rem;

    &:hover {
      ${HoverBoxCSS}
    }
  }
`

const S = { Wrapper, ItemWrap, ContentWrap, AnimatedIcons }
