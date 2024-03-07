import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Homepage />,
  },
]);
