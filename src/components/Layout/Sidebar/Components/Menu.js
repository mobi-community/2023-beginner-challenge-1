import { useLocation } from 'react-router'
import { styled } from 'styled-components'
import { MENU } from '../../../../constants/menu.const'
import MenuItem from './Item'

export default function Menu() {
  const location = useLocation()
  const nowTitle = location.pathname.split('/')[1] // 현재 url 상 title ( '' | 'user' | 'order' | 'stock' )

  return (
    <S.Wrapper>
      <S.Container>
        {MENU.map(({ category, items }) => (
          <div key={category}>
            <S.CateText>{category}</S.CateText>
            {items.map((item) => (
              <MenuItem
                key={item.title}
                item={item}
                isNowTitle={nowTitle === item.url}
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
