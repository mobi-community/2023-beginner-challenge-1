import { Outlet } from 'react-router'
import { styled } from 'styled-components'
import Sidebar from './Sidebar/Sidebar'

export default function Layout() {
  return (
    <S.Wrapper>
      <Sidebar />
      <Outlet />
    </S.Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
`

const S = { Wrapper }
