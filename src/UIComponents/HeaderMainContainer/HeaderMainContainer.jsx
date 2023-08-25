import Button from 'UIComponents/Button/Button';
import styles from './HeaderMainContainer.module.scss';
// import img from 'assets/images/header_img.png';
import playCircle from 'assets/icons/play_circle.png';
export default function HeaderMainContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>One more friend</h1>
                <h2 className={styles.subtitle}>Thousands more fun!</h2>
                <p className={styles.text}>
                    Adopting a pet brings immeasurable joy, a lifelong companion, and a source of happiness who will always be by your side for endless fun. 
                </p>
                <div className={styles.buttons}>
                    <Button title="View Intro >" size="btn_158_t" className={styles.viewIntro}>
                        <img src={playCircle} alt="playCircle" className={styles.playCircle} />
                    </Button>
                  
                    <Button title="Explore Now" size="btn_163" />
                  
                </div>
            </div>
            <div className={styles.right}>
                {/* <img src={img} alt="header_img" className={styles.img} /> */}
            </div>
        </div>
    );
}
