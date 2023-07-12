import { MENU, getTitleNum } from '../../../../constants/menu.const'

import MenuItem from './Item'
import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Menu() {
  const TOTAL_TITLE = getTitleNum() // 토클로 관리될 title 개수
  const { pathname } = useLocation()
  const nowTitle = pathname.split('/')[1]

  const [isToggledList, setIsToggledList] = useState(
    Array(TOTAL_TITLE).fill(false)
  )

  const handleTitleToggle = (index) => {
    const prev = isToggledList[index]
    const newToggledList = [...isToggledList]
    newToggledList[index] = !prev

    setIsToggledList(newToggledList)
  }

  return (
    <S.Wrapper>
      <S.Container>
        {MENU.map(({ category, items }) => (
          <div key={category}>
            <S.CateText>{category}</S.CateText>
            {items.map((item, index) => (
              <MenuItem
                key={item.title}
                item={item}
                nowTitle={nowTitle}
                isToggled={isToggledList[index]}
                handleToggle={() => handleTitleToggle(index)}
              />
            ))}
          </div>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
`

const Container = styled.div`
  padding: 1.4rem;
`

const CateText = styled.p`
  font-size: 1.6rem;
  color: gray;
`

const S = { Wrapper, Container, CateText }
