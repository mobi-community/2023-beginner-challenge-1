import { styled } from 'styled-components'

export const Wrapper = styled.section`
  min-width: 22rem;
  max-width: 22rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.sub};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.8rem;
`
