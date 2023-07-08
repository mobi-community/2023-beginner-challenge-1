import * as S from './Sidebar.style'

import Image from '../../Image/Image'
import Menu from './components/Menu'

export default function Sidebar() {
  return (
    <S.Wrapper>
      <S.Container>
        <Image
          src='/logo.png'
          alt='logo'
          width={'80%'}
          heigh={30}
        />
        <Menu />
      </S.Container>
    </S.Wrapper>
  )
}
