import Button from 'UIComponents/Button/Button';
import styles from './ShoppingCart.module.scss';
import { useState } from 'react';

export default function ShoppingCart() {
    const dummyData = [
        {
            _id: 1,
            SKU: 11001,
            image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
            title: 'Dog Salmon Pate',
            product: 'Dog Food',
            size: '385gm',
            price: 140,
            present: 'Free Toy & Free Shaker',
        },
        {
            _id: 2,
            SKU: 11002,
            image: 'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Adult Cat Food',
            product: 'Cat Food',
            size: '1.5kg',
            price: 165,
            present: 'Free Toy & Free Shaker',
        },
        {
            _id: 3,
            SKU: 11003,
            image: 'https://images.unsplash.com/photo-1616240133571-146fa869b7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
            title: 'Cat scratching ball',
            product: 'Toy',
            price: 1100,
            present: 'Free Cat Food',
        },
        {
            _id: 4,
            SKU: 11004,
            image: 'https://images.unsplash.com/photo-1577349516274-37ff88a53627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Adult Cat Food',
            product: 'Toy',
            price: 410,
            present: 'Free Cat Food',
        },
        {
            _id: 5,
            SKU: 11005,
            image: 'https://images.unsplash.com/photo-1619508111539-a0c4d7afa3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Dogs-Salmon Oil',
            product: 'Dog Food',
            size: '385mg',
            price: 350,
            present: 'Free Toy & Free Shaker',
        },
    ];
    const [quantities, setQuantities] = useState(dummyData.map(() => 1));
    const [perPrice, setPerPrice] = useState(dummyData.map((item) => item.price));
    const [deliverFee, setDeliverFee] = useState(500);
    const handleDecrease = (index) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            const newPerPrice = [...perPrice];
            newPerPrice[index] = newQuantities[index] * dummyData[index].price;
            setQuantities(newQuantities);
            setPerPrice(newPerPrice);
        }
    };
    const handleIncrease = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        const newPerPrice = [...perPrice];
        newPerPrice[index] = newQuantities[index] * dummyData[index].price;
        setQuantities(newQuantities);
        setPerPrice(newPerPrice);
    };
    const calculateTotalPrice = () => {
        const totalPrice = perPrice.reduce((acc, price) => acc + price, 0);

        const totalWithDelivery = totalPrice + deliverFee;
        return totalWithDelivery;
    };

    return (
        <div className={styles.container}>
            <h3>Shopping Cart</h3>
            <div className={styles.mainContainer}>
                <div className={styles.productWrapper}>
                    {dummyData.map((item, index) => (
                        <div className={styles.productItemContainer} key={item._id}>
                            <div className={styles.productItem}>
                                <img className={styles.image} src={item.image} alt={item.title} />
                                <div className={styles.productItemContent}>
                                    <div className={styles.productItemTitle}>{item.title}</div>
                                    <div className={styles.productItemPrice}>
                                        <div className={styles.price}> ${perPrice[index]}</div>
                                        <div className={styles.productItemQuantity}>
                                            <div
                                                className={styles.minusButton}
                                                id={`circleMinus${index}`}
                                                onClick={() => handleDecrease(index)}
                                            >
                                                -
                                            </div>
                                            <div className={styles.productItemQuantityInput}>{quantities[index]}</div>
                                            <div
                                                className={styles.addButton}
                                                id={`circlePlus${index}`}
                                                onClick={() => handleIncrease(index)}
                                            >
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.priceWrapper}>
                    <div className={styles.priceContainer}>
                        <div className={styles.deliverFeeWrapper}>
                            <p>Deliver Fee</p>
                            <div className={styles.deliverFee}>
                                {deliverFee.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'NTD',
                                    maximumFractionDigits: 0,
                                    minimumFractionDigits: 0,
                                })}
                            </div>
                        </div>
                        <div className={styles.priceTotal}>
                            {calculateTotalPrice().toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'NTD',
                                maximumFractionDigits: 0,
                                minimumFractionDigits: 0,
                            })}
                        </div>
                    </div>
                    <Button title="Checkout" size="btn_158_n" />
                </div>
            </div>
        </div>
    );
}
