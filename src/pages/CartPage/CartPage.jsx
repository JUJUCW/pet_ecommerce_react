import Footer from 'components/Footer/Footer';
import styles from './CartPage.module.scss';
import NavBar from 'UIComponents/NavBar/NavBar';
import Cart from 'UIComponents/Cart/Cart';

export default function CartPage() {
    return (
        <div className={styles.container}>
            <NavBar />
            <Cart />
            <Footer />
        </div>
    );
}
