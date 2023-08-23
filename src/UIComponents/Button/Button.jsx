import clsx from 'clsx';
import styles from './Button.module.scss';

export default function Button({ title, onClick, size }) {
    const buttonClassName = clsx(styles.button, {
        [styles.btn_151]: size === 'btn_151',
        [styles.btn_151_t]: size === 'btn_151_t',
        [styles.btn_158]: size === 'btn_158',
        [styles.btn_158_t]: size === 'btn_158_t',
        [styles.btn_163]: size === 'btn_163',
        [styles.btn_196]: size === 'btn_196',
        [styles.btn_196_t]: size === 'btn_196_t',
    });
    return (
        <button className={buttonClassName} onClick={onClick}>
            {title}
        </button>
    );
}
