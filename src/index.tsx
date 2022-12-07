import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import { enviroment as Enviroment } from 'relay';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Enviroment}>
      <Suspense fallback={"...loading"}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
