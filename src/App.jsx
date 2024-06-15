import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './styles/index.css';

import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import { useHistory, useLocation } from 'react-router-dom';
import { theme } from './index';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    const location = useLocation();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="hidden"></div>
            {location.pathname !== '/' && <Header />}
            <div className="app">
                <div className="container">
                    <AppRoutes />
                </div>
            </div>
            {/*<ReactQueryDevtools/>*/}
        </QueryClientProvider>
    );
};

export default App;