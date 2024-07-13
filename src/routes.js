import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import TopEA from "./pages/TopEA";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TopEA />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api-test",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
]);
