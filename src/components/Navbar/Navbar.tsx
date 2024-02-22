// import styles from './Navbar.module.scss';
import { Link } from '@tanstack/react-router';

function Navbar() {
    return (
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
            <Link to="/about" className="[&.active]:font-bold">
                About
            </Link>
        </div>
    );
}

export default Navbar;
