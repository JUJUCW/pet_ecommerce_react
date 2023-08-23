import NavBar from 'UIComponents/NavBar/NavBar';
import styles from './ProductPage.module.scss';
import Footer from 'components/Footer/Footer';
import ProductMainContainer from 'components/ProductMainContainer/ProductMainContainer';

export default function ProductPage() {
    return (
        <div className={styles.container}>

        <NavBar />
        <ProductMainContainer />
        <Footer />
        </div>
    );
}