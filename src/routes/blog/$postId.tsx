import { createFileRoute } from '@tanstack/react-router';
import Post from '../../pages/Post/Post';

export const Route = createFileRoute('/blog/$postId')({
    component: Post,
});
