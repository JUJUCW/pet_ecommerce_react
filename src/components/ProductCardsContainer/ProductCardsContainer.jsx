import ProductCard from 'UIComponents/ProductCard/ProductCard';
import styles from './ProductCardsContainer.module.scss';
import Button from 'UIComponents/Button/Button';
import { useEffect, useState } from 'react';
import { getAllProducts } from 'api/product';

export default function ProductCardsContainer() {
    const [productCards, setProductCards] = useState('');

    useEffect(() => {
        const getProductCard = async () => {
            try {
                const data = await getAllProducts();
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    setProductCards(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getProductCard();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.left}>
                    <p className={styles.text}>Hard to choose right products for them?</p>
                    <p className={styles.title}>Our Products</p>
                </div>
                <div className={styles.right}>
                    <Button title="View more >" size="btn_151_t" />
                </div>
            </div>
            <div className={styles.cardContainer}>
                {Object.keys(productCards).map((key) => {
                    const { SKU, title, price, product, size, image } = productCards[key];

                    return (
                        <ProductCard
                            key={key}
                            SKU={SKU}
                            title={title}
                            price={price}
                            product={product}
                            size={size}
                            image={image}
                        />
                    );
                })}
            </div>
        </div>
    );
}
