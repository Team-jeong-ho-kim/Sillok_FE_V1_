import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layout';
import { Login } from './pages';
import { Main } from './pages/Main';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);
