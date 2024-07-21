import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import TopEA from "./pages/TopEA";
import AllTrades from "./pages/AllTrades";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TopEA />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account/:acc_no/magic_no/:magic_no",
    element: <AllTrades />,
  },
  {
    path: "/api-test",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
]);
