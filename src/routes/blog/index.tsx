import { createFileRoute } from '@tanstack/react-router';
import Blog from '../../pages/Blog/Blog';

export const Route = createFileRoute('/blog/')({
    component: Blog,
});
