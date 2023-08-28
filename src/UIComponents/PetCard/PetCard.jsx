import { Link } from 'react-router-dom';
import styles from './PetCard.module.scss';

export default function PetCard(props) {
    const { gene, age, title, SKU, images, location } = props;

    return (
        <Link to={`/dogs?SKU=${SKU}`} className={styles.noUnderline}>
            <div className={styles.container}>
                <img src={images} alt="" className={styles.img} />
                <div className={styles.info}>
                    <p className={styles.petName}>{title}</p>
                    <div className={styles.contentBox}>
                        <p>Gender : {gene}</p>
                        <p>・</p>
                        <p>Age : {age}</p>
                    </div>
                    <p className={styles.location}>Location : {location}</p>
                </div>
            </div>
        </Link>
    );
}
