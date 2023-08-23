// import clsx from 'clsx';
import styles from './NavItem.module.scss';

export default function NavItem({ title }) {
    return (
        <div className={styles.container}>
            <div className={styles.titleClasses}>{title}</div>
        </div>
    );
}
