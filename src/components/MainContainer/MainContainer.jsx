import PetCardsContainer from 'components/PetCardsContainer/PetCardsContainer';
import MainBanner from 'UIComponents/MainBanner/MainBanner';
import ProductCardsContainer from 'components/ProductCardsContainer/ProductCardsContainer';
import KnowledgeCardsContainer from 'components/KnowledgeCardsContainer/KnowledgeCardsContainer';

import styles from './MainContainer.module.scss';
import Banner from 'UIComponents/MainBanner/Banner';

export default function MainContainer() {
    return (
        <div className={styles.container}>
            <PetCardsContainer />
            <MainBanner />
            <ProductCardsContainer />
            <Banner />
            <KnowledgeCardsContainer />
        </div>
    );
}
