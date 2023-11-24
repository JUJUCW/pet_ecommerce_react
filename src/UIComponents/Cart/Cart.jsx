import AddressInfo from 'UIComponents/AddressInfo/AddressInfo';
import styles from './Cart.module.scss';
import PaymentInfo from 'UIComponents/PaymentInfo/PaymentInfo';
import ShippingInfo from 'UIComponents/ShippingInfo/ShippingInfo';
import ShoppingCart from 'UIComponents/ShoppingCart/ShoppingCart';

export default function Cart() {
    return (
        <div className={styles.container}>
            <h2>結帳</h2>
            <div className={styles.mainContainer}>
                <div className={styles.left}>
                    <AddressInfo />
                    <PaymentInfo />
                    <ShippingInfo />
                </div>
                <div className={styles.right}>
                    <ShoppingCart />
                </div>
            </div>
        </div>
    );
}
