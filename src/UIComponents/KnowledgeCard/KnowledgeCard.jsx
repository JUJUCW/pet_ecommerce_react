import styles from './KnowledgeCard.module.scss';
import img from 'assets/images/knowledge_01.jpg';

export default function KnowledgeCard() {
    return (
        <div className={styles.container}>
            <img src={img} alt="img" className={styles.img} />
            <div className={styles.contentContainer}>
                <div className={styles.tag}>Pet Knowledge</div>
                <p className={styles.title}>
                    A Guide to Happy and Healthy Companions
                </p>
                <div className={styles.content}>
                    <p>
                        Having a pet is a wonderful experience, but it also comes with great responsibility. To ensure
                        the well-being of your furry friend, it's crucial to have a solid understanding of pet care and
                        knowledge. This guide aims to provide essential information and tips to help you become a
                        knowledgeable and responsible pet owner.
                    </p>
                </div>
            </div>
        </div>
    );
}
