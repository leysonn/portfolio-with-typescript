import { createFileRoute } from '@tanstack/react-router';
import Portfolio from '../../pages/Portfolio/Portfolio';

export const Route = createFileRoute('/portfolio/')({
    component: Portfolio,
});
