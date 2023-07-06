import { css, keyframes } from 'styled-components'

export const HoverBoxCSS = css`
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLOR.hover};
  transition: background-color 0.3s ease;
`

export const FlexColumnCSS = css`
  display: flex;
  flex-direction: column;
`

export const FlexCenterCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FlexAlignCSS = css`
  display: flex;
  align-items: center;
`

export const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`
