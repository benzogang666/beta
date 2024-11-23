import { createBrowserRouter } from "react-router-dom";

import Start from "./Pages/Start/Start";

import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Search from "./Pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/beta/start",
    element: <Start />,
  },
  {
    path: "/beta/",
    element: <Menu />,
  },
  {
    path: "/beta/cart",
    element: <Cart />,
  },
  {
    path: "/beta/search",
    element: <Search />,
  },
]);

export default router;