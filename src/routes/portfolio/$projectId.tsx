import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/portfolio/$projectId')({
    component: () => <div>Hello /portfolio/$route!</div>,
});
