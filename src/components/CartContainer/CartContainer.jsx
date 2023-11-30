import AddressInfo from 'UIComponents/AddressInfo/AddressInfo';
import styles from './CartContainer.module.scss';
import PaymentInfo from 'UIComponents/PaymentInfo/PaymentInfo';
import ShippingInfo from 'UIComponents/ShippingInfo/ShippingInfo';
import ShoppingCart from 'UIComponents/ShoppingCart/ShoppingCart';
// import Stepper from 'UIComponents/Stepper/Stepper';

export default function CartContainer() {
    return (
        <div className={styles.container}>
            <h2>CHECKOUT</h2>
            <div className={styles.mainContainer}>
                <div className={styles.left}>
                    {/* <Stepper /> */}
                    <AddressInfo />
                    <ShippingInfo />
                    <PaymentInfo />
                    
                </div>
                <div className={styles.right}>
                    <ShoppingCart />
                </div>
            </div>
        </div>
    );
}
