import Pagination from 'UIComponents/Pagination/Pagination';
import styles from './Collection.module.scss';
import img from 'assets/images/img/Cute Pet Cat Warm Nest.jpg';

export default function Collection() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Collection</h2>
            <div className={styles.photosContainer}>
                <img src={img} alt="poppies" />
                <img src={img} alt="poppies" />
                <img src={img} alt="poppies" />
                <img src={img} alt="poppies" />
                <img src={img} alt="poppies" />
                <img src={img} alt="poppies" />
            </div>
            <Pagination />
        </div>
    );
}
