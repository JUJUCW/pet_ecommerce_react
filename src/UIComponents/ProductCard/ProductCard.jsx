import styles from './ProductCard.module.scss';
import cart from 'assets/icons/cart.png';
import heart from 'assets/icons/heart.png';

export default function ProductCard(props) {
    const { title, price, product, size, image } = props;
    // console.log(props);
    return (
        <div className={styles.container}>
            <img src={image} alt={image} className={styles.img} />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>Product : {product}</p>
                <p className={styles.description}>Size : {size}</p>
                <p className={styles.price}>$ {price}</p>
                <div className={styles.icons}>
                    <img src={cart} alt="cart" className={styles.cart} />
                    <img src={heart} alt="heart" className={styles.heart} />
                </div>
            </div>
        </div>
    );
}
