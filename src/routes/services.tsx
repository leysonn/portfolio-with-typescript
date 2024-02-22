import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/services')({
    component: () => <div>Hello /services!</div>,
});
