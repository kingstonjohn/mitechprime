import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { reactQueryConfigs } from './constants/reactQuery.config.js';
import { Toaster } from "react-hot-toast";
import { AuthStateProvider } from './context/authState.jsx';
import NProgress from 'nprogress';
import ReactGA from "react-ga4";
import { AppStateProvider } from './context/appState.jsx';

ReactGA.initialize("G-1ED8TLN3CM");

const queryClient = new QueryClient(reactQueryConfigs)

NProgress.configure();

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthStateProvider>
        <AppStateProvider>
          <App />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              duration: 2200,
            }}
          />
        </AppStateProvider>
      </AuthStateProvider>
    </HelmetProvider>
  </QueryClientProvider>,
)
