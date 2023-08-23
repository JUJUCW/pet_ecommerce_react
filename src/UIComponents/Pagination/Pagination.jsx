import styles from './Pagination.module.scss';

export default function Pagination() {
    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                <span className={styles.page}>-</span>
                <span className={styles.page}>1</span>
                <span className={styles.page}>2</span>
                <span className={styles.page}>3</span>
                <span className={styles.page}>4</span>
                <span className={styles.page}>5</span>
                <span className={styles.page}>6</span>
                <span className={styles.page}>7</span>
                <span className={styles.page}>...</span>
            </div>
        </div>
    );
}
