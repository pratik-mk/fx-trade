import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import ChartRec from "./pages/ChartRec";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chartrec",
    element: <ChartRec />,
  },
]);
