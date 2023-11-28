import Footer from 'components/Footer/Footer';
import styles from './CartPage.module.scss';
import NavBar from 'UIComponents/NavBar/NavBar';
import CartContainer from 'components/CartContainer/CartContainer';

export default function CartPage() {
    return (
        <div className={styles.container}>
            <NavBar />
            <CartContainer />
            <Footer />
        </div>
    );
}
