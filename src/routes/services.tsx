import { createFileRoute } from '@tanstack/react-router';
import Services from '../pages/Services/Services';

export const Route = createFileRoute('/services')({
    component: Services,
});
