import { useParams } from 'react-router-dom'

export default function StockPage() {
  const { page } = useParams()

  const STOCK_PAGE_MAP = {
    list: <h1>재고 목록 페이지 📦</h1>,
    scheduled: <h1>입고 예정된 물품 리스트 페이지 🎁</h1>,
  }
  return STOCK_PAGE_MAP[page]
}
