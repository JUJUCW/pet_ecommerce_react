import styles from './SearchItem.module.scss';
// import dog from 'assets/images/img/7.jpg';
// import { Link } from 'react-router-dom';
export default function SearchItem({ ...props }) {
    const { gene, age, title,location,images } = props;

    return (
        // <Link to={`/dogs?SKU=${SKU}`}>
        <div className={styles.container}>
            <img src={images} alt="" className={styles.img} />
            <div className={styles.content}>
                <p className={styles.petName}>
                    {/* {SKU} */}
                    {title}
                </p>
                <div className={styles.descriptionBox}>
                    <p className={styles.description}>Gender: {gene}</p>
                    <p className={styles.description}>Age: {age}</p>
                </div>
                <p className={styles.Location}>Location: {location} </p>
            </div>
        </div>
        // </Link>
    );
}
