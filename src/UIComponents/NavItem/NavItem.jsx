// import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

export default function NavItem({ title }) {
    return (
        <Link to={`/${title}`} className={styles.link}>
            <div className={styles.titleClasses}>{title}</div>
        </Link>
    );
}
