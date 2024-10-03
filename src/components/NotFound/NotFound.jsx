// filename: src/components/NotFound/NotFound.jsx

import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
    return (
        <div className={`ui-container ${styles.notFoundContainer}`}>
            <h1>¡Ups!</h1>
            <p>Esa página no existe, por favor hacé click <Link to="/">acá</Link> para volver a la página principal.</p>
        </div>
    );
}
