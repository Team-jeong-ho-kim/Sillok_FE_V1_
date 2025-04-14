import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

const cookiesOptions = {
  path: '/',
  sameSite: 'strict' as const,
  secure: window.location.protocol === 'https:',
};

root.render(
  <CookiesProvider defaultSetOptions={cookiesOptions}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>
);
