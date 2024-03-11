import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import NavLinks from './NavLinks';
import mobile_menu_icon from '../../assets/icons/mobile_menu_icon.svg';
import close_icon from '../../assets/icons/close_icon.svg';

function Navbar() {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    function toggleMobileMenu() {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <Link
                    to="/"
                    className={styles.logo}
                    onClick={() => {
                        mobileMenuVisible ? toggleMobileMenu() : undefined;
                    }}
                >
                    <img src={logo} alt="Company logo" />
                    <h1>Agency</h1>
                </Link>

                <NavLinks />

                <Button className={styles.mobileMenuButton} width={3} color="dark" onClick={toggleMobileMenu}>
                    {mobileMenuVisible ? (
                        <img src={close_icon} alt="Close mobile menu" loading="lazy" />
                    ) : (
                        <img src={mobile_menu_icon} alt="Open mobile menu" loading="lazy" />
                    )}
                </Button>
            </section>

            <div className={styles.mobileMenuWrapper + (mobileMenuVisible ? ' ' + styles.mobileMenuWrapperActive : '')}>
                <div className={styles.mobileMenuContent}>
                    <NavLinks onClick={toggleMobileMenu} />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
