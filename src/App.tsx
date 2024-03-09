import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
