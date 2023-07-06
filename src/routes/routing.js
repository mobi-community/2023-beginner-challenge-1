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
        path: '/order/:page',
        element: <OrderPage />,
      },
      {
        path: '/stock/:page',
        element: <StockPage />,
      },
      {
        path: '/user/:page',
        element: <UserPage />,
      },
    ],
  },
])
