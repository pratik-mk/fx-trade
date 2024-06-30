import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import MagicData from "./pages/MagicData";
import AllTrades from "./pages/AllTrades";
import BasicTable from "./components/CustomTable/CustomTable";
import SideNavbar from "./components/Layout/SideNavbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/magic_no/:acc_no",
    element: <MagicData />,
  },
  {
    path: "/account/:acc_no/magic_no/:magic_no",
    element: <AllTrades />,
  },
  {
    path: "/table",
    element: <BasicTable/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/layout",
    element: <SideNavbar/>
  },
]);
