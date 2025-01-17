import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

export function AppProviders({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error('Error caught:', error)}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Quelque chose s'est mal passé :</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}
