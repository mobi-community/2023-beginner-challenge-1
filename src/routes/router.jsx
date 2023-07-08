import { createBrowserRouter } from "react-router-dom";
import Product from "../pages/Product";
import SignUp from "../pages/SignUp";
import App from "../App";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        // {index: true, element: <Product />},
        {path: 'product', element: <Product />},
        {path: 'product/:prod', element: <Product />},
        {path: 'signUp', element: <SignUp />},
        {path: 'signUp/:user', element: <SignUp />},
      ]
    }
])

export default router;