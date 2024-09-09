// filename: src/components/Item/Item.jsx

import { Link } from "react-router-dom";
import styles from './Item.module.css';

export function Item({ id, name, description, price, image }) {
     return (
          <div className={styles.card}>
               <img src={image} alt={name} />
               <h2>{name}</h2>
               <p>{description}</p>
               <p className={styles.itemPriceDisplay}>Precio: {price}</p>
               <div className={styles.itemFooter}>
                    <Link to={`/item/${id}`} className={styles.button}>Ver detalles</Link>
               </div>
          </div>
     );
}