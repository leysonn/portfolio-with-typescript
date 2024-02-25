import { Link } from '@tanstack/react-router';
import Button from '../Button/Button';

type NavLinksProps = {
    onClick?(): void;
};

function NavLinks({ onClick }: NavLinksProps) {
    return (
        <>
            <nav>
                <Link to="/about" onClick={onClick}>
                    About
                </Link>
                <Link to="/services" onClick={onClick}>
                    Services
                </Link>
                <Link to="/portfolio" onClick={onClick}>
                    Portfolio
                </Link>
                <Link to="/blog" onClick={onClick}>
                    Blog
                </Link>
            </nav>

            <Link to="/contact">
                <Button width={8.62} color="dark" onClick={onClick}>
                    CONTACT
                </Button>
            </Link>
        </>
    );
}

export default NavLinks;
