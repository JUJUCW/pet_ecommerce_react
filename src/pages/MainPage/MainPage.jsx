import Header from 'components/Header/Header';
import styles from './MainPage.module.scss';
import Footer from 'components/Footer/Footer';
import MainContainer from 'components/MainContainer/MainContainer';

export default function MainPage() {
    return (
        <div className={styles.container}>
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
}
