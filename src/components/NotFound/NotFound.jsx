// filename: src/components/NotFound/NotFound.jsx

import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
    return (
        <div className={`ui-container ${styles.notFoundContainer}`}>
            <h1>Error</h1>
            <p>Esa página no existe y/o está en mantenimiento, por favor hacé click <Link to="/">aquí</Link> para volver al Home.</p>
        </div>
    );
}
