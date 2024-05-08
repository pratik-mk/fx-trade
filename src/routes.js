import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/Errorpage'
import ChartRec from './pages/ChartRec'
import MagicData from './pages/MagicData'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/chartrec',
    element: <ChartRec />,
  },
  {
    path: '/magic_no/:acc_no',
    element: <MagicData />,
  },
])
