import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { Suggestion, Main } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/suggestion',
        element: <Suggestion />,
      },
    ],
  },
]);
