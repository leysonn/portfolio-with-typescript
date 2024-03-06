import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
