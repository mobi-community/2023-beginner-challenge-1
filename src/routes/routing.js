import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import DashBoardPage from '../pages/DashBoard'
import OrderPage from '../pages/Order'
import StockPage from '../pages/Stock'
import UserPage from '../pages/User'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <DashBoardPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/stock',
        element: <StockPage />,
      },
      {
        path: '/user',
        element: <UserPage />,
      },
    ],
  },
])
