import {
  createBrowserRouter,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';
import { AppLayout } from './layout';
import { Suggestion, Main } from './pages';

function ErrorBoundary() {
  const error = useRouteError();
  console.error('애플리케이션 오류:', error);

  let errorMessage = '알 수 없는 오류가 발생했습니다';

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}: ${error.data}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>오류가 발생했습니다</h1>
      <p>{errorMessage}</p>
      <p>자세한 정보는 콘솔을 확인하세요.</p>
    </div>
  );
}

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
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
