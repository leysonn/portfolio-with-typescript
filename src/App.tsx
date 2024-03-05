import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import Navbar from './components/Navbar/Navbar';

function Root() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
        </>
    );
}

export default Root;
