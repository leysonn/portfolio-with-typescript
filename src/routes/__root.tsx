import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '../components/Navbar/Navbar';

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
