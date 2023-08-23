import NavBar from 'UIComponents/NavBar/NavBar';
import HeaderMainContainer from 'UIComponents/HeaderMainContainer/HeaderMainContainer';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <NavBar />
            <HeaderMainContainer />
        </div>
    );
}
