import styles from './PaymentInfo.module.scss';

export default function PaymentInfo() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Payment Information</h3>
            <div className={styles.paymentInfo}>
                <div className={styles.paymentMethod}>
                    <div className={styles.creditCard}>
                        <input type="radio" id="creditCard" name="payment" value="creditCard" />
                        <label htmlFor="creditCard">Credit Card</label>
                    </div>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardNumber}>
                            <label htmlFor="cardNumber">Card Name</label>
                            <input type="text" id="cardName" name="cardName" placeholder="Credit Card Name" />
                        </div>
                        <div className={styles.cardNumber}>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" placeholder="1111 2222 3333 4444" />
                        </div>
                        <div className={styles.cardExpiration}>
                            <label htmlFor="cardExpiration">Expiration Date</label>
                <input type="text" id="cardExpiration" name="cardExpiration"
                placeholder='MM/YY'/>
                        </div>
                        <div className={styles.cardCvv}>
                            <label htmlFor="cardCvv">CVV</label>
                <input type="text" id="cardCvv" name="cardCvv"
                placeholder='123'/>
                        </div>
                    </div>
                </div>
                <div className={styles.paymentMethod}>
                    <div className={styles.paypal}>
                        <input type="radio" id="paypal" name="payment" value="paypal" />
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
