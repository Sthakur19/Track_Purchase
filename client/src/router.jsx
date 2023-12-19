import {
    createBrowserRouter,
  } from "react-router-dom";
import ProductList from "./pages/ProductList";
import PurchaseList from "./pages/PurchaseList";
import Login from "./pages/Login";
  


  const router = createBrowserRouter([
    {
      path: "/",
      element:<ProductList/> ,
    },
    {
      path: "/purchase",
      element:<PurchaseList/> ,
    },
    {
      path: "/login",
      element:<Login/> ,
    },
  ]);

  export default router;