import { createBrowserRouter } from "react-router-dom";
import UserInfo from "../Pages/List/userInfo";
import UserList from "../Pages/List/userList";
import Layout from "../Components/Layout";
import ProductList from "../Pages/List/productList";
import ProductInfo from "../Pages/List/productInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/product-info/:category/:menu",
        element: <ProductInfo />,
      },
      {
        path: "/product-list/:category/:menu",
        element: <ProductList />,
      },
      {
        path: "/user-info/:category/:menu",
        element: <UserInfo />,
      },
      {
        path: "/user-list/:category/:menu",
        element: <UserList />,
      },
    ],
  },
]);
