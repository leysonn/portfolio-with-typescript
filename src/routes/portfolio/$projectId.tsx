import { createFileRoute } from '@tanstack/react-router';
import Project from '../../pages/Project/Project';

export const Route = createFileRoute('/portfolio/$projectId')({
    component: Project,
});
