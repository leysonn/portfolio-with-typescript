import { Outlet, RouterProvider, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup();
});

function createTestRouter(component: () => React.ReactElement) {
    const rootRoute = createRootRoute({
        component: Outlet,
    });

    const componentRoute = createRoute({
        getParentRoute: () => rootRoute,
        path: '/',
        component,
    });

    const router = createRouter({
        routeTree: rootRoute.addChildren([componentRoute]),
    });

    return router;
}

function renderWithRouter(ui: () => React.ReactElement, options = {}) {
    const router = createTestRouter(ui);
    return render(<RouterProvider router={router} />, options);
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { renderWithRouter };
