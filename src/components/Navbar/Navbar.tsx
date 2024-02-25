import { Link } from '@tanstack/react-router';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';

function Navbar() {
    return (
        <header className={styles.header}>
            <section className={styles.content}>
                {/* TODO Разнести надпись и логотип по разным файлам */}
                <Link to="/" className={styles.logo}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                </Link>

                {/* TODO Навбар для телефонов */}

                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/blog">Blog</Link>
                </nav>

                <Link to="/contact">
                    <Button width={8.62} content="CONTACT" color="dark" />
                </Link>
            </section>
        </header>
    );
}

export default Navbar;
