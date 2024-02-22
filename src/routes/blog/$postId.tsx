import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/$postId')({
    component: () => <div>Hello /blog/$postId!</div>,
});
