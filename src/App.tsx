import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import Navbar from './components/Navbar/Navbar';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <Outlet />
            <FooterSection />
        </>
    );
}

export default App;
