import {
  faBagShopping,
  faBoxOpen,
  faChessBoard,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import Icons from '../components/Icons/Icons'

export const MENU = [
  {
    category: '사이트 관리',
    items: [
      {
        title: '대시보드',
        icons: <Icons name={faChessBoard} />,
        contents: [],
      },
      {
        title: '사용자 관리',
        icons: <Icons name={faUser} />,
        contents: ['사용자목록', '신고된유저'],
      },
      {
        title: '주문 관리',
        icons: <Icons name={faBagShopping} />,
        contents: ['신규주문', '취소관리', '반품관리', '교환관리'],
      },
      {
        title: '재고 관리',
        icons: <Icons name={faBoxOpen} />,
        contents: ['재고목록', '입고예정목록'],
      },
    ],
  },
]
