import NavBar from 'UIComponents/NavBar/NavBar';
import styles from './CategoryPage.module.scss';
import Footer from 'components/Footer/Footer';
import MainBanner from 'UIComponents/MainBanner/MainBanner';
import CategoryMainContainer from 'components/CategoryMainContainer/CategoryMainContainer';
import Breadcrumb from 'UIComponents/Breadcrumb/Breadcrumb';

export default function CategoryPage() {
    return (
        <div className={styles.container}>
            <NavBar />
            <Breadcrumb />
            <MainBanner />
            <CategoryMainContainer />
            <Footer />
        </div>
    );
}
