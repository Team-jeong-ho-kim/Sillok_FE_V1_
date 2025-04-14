import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from '@sillok/design-token';

export const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </>
  );
};
