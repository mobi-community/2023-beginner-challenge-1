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
        url: '/',
        icons: <Icons name={faChessBoard} />,
        contents: [],
      },
      {
        title: '사용자 관리',
        url: 'user',
        icons: <Icons name={faUser} />,
        contents: [
          {
            page: '사용자목록',
            path: '/user/list',
          },
          {
            page: '신고된 유저',
            path: '/user/reported',
          },
        ],
      },
      {
        title: '주문 관리',
        url: 'order',
        icons: <Icons name={faBagShopping} />,
        contents: [
          {
            page: '신규주문',
            path: '/order/list',
          },
          {
            page: '취소관리',
            path: '/order/cancel',
          },
          {
            page: '반품관리',
            path: '/order/return',
          },
          {
            page: '교환관리',
            path: '/order/exchange',
          },
        ],
      },
      {
        title: '재고 관리',
        url: 'stock',
        icons: <Icons name={faBoxOpen} />,
        contents: [
          {
            page: '재고목록',
            path: '/stock/list',
          },
          {
            page: '입고예정목록',
            path: '/stock/scheduled',
          },
        ],
      },
    ],
  },
]

export const getTitleNum = () => {
  let count = 0

  for (const category of MENU) {
    count += category.items.length
  }

  return count
}
