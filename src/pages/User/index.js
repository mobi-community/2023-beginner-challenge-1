import { useParams } from 'react-router-dom'

export default function UserPage() {
  const { page } = useParams()

  const USER_PAGE_MAP = {
    list: <h1>사용자 목록 페이지 👨‍👩‍👧‍👧</h1>,
    reported: <h1>신고된 유저 페이지 👿</h1>,
  }

  return USER_PAGE_MAP[page]
}
