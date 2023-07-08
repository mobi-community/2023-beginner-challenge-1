import Product from "components/Product";
import ProductList from "components/Product/ProductList";
import ProductUpdate from "components/Product/ProductUpdate";
import User from "components/User";
import UserList from "components/User/UserList";
import UserPurchase from "components/User/UserPurchase";
import Layout from "layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user/user-list",
        element: <UserList />,
      },
      {
        path: "user/user-purchase",
        element: <UserPurchase />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/product-list",
        element: <ProductList />,
      },
      {
        path: "product/product-update",
        element: <ProductUpdate />,
      },
    ],
  },
]);

export default router;
