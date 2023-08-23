import KnowledgeCard from 'UIComponents/KnowledgeCard/KnowledgeCard';
import Button from 'UIComponents/Button/Button';
import styles from './KnowledgeCardsContainer.module.scss';

export default function KnowledgeCardsContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.left}>
                    <p className={styles.text}>What's new?</p>
                    <p className={styles.title}>Take a look at some of them</p>
                </div>
                <div className={styles.right}>
                    <Button title="View more >" size="btn_151_t" />
                </div>
            </div>
            <div className={styles.cardContainer}>
                <KnowledgeCard />
                <KnowledgeCard />
                <KnowledgeCard />
            </div>
        </div>
    );
}
