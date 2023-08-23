import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { getAllDogs } from 'api/dog';
import Button from 'UIComponents/Button/Button';
import styles from './PetCardsContainer.module.scss';
import PetCard from 'UIComponents/PetCard/PetCard';
export default function PetCardContainer() {
    // const URL = useParams();
    const [petCards, setPetCards] = useState({});

    useEffect(() => {
        const getPetCard = async () => {
            try {
                // if (SKU) {
                const data = await getAllDogs();
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    setPetCards(data);
                    // console.log('data', (data));
                }
            } catch (error) {
                console.log(error);
            }
        };
        getPetCard();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.left}>
                    <p className={styles.text}>What's new?</p>
                    <p className={styles.title}>Take a look at some of them</p>
                </div>
                <div className={styles.right}>
                    <Button title="View more >" size="btn_151_t" />
                </div>
            </div>
            <div className="col-xxl-12 col-lg-9 col-xs-4 ">
                <div className={styles.cardContainer}>
                    {Object.keys(petCards).map((key) => {
                        const { SKU, gene, age, title, images, location } = petCards[key];

                        return (
                            <PetCard
                                key={key}
                                SKU={SKU}
                                gene={gene}
                                age={age}
                                title={title}
                                images={images}
                                location={location}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
