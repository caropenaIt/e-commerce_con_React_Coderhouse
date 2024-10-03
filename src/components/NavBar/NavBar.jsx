// filename: src/components/NavBar/NavBar.jsx

import { NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';
const logo = '/logo-mercado-caro.png';

export function NavBar() {
    return (
        <nav className={styles.navContainer}>
            <NavLink to="/" className={styles.navbarLogoLink}>
                <img src={logo} alt="Mercado-Caro-Logo" className={styles.navbarLogo} />
            </NavLink>
            <div className={styles.navLinks}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Inicio </NavLink>
                <NavLink to="/category/Remeras" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}  >Remeras  </NavLink>
                <NavLink to="/category/Pantalones" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}   >Pantalones  </NavLink>
                <NavLink to="/category/Zapatillas" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Zapatillas</NavLink> </div>
            <CartWidget />
        </nav>
    );
}
