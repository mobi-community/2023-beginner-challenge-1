import { useParams } from 'react-router-dom'

export default function OrderPage() {
  const { page } = useParams()

  const ORDER_PAGE_MAP = {
    list: <h1>물품 리스트 페이지 🛍️</h1>,
    cancel: <h1>취소 물품 리스트 페이지 🥺</h1>,
    return: <h1>반품 물품 리스트 페이지 😅</h1>,
    exchange: <h1>교환 물품 리스트 페이지 🤣</h1>,
  }
  return ORDER_PAGE_MAP[page]
}
