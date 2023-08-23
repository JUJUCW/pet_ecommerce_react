import styles from './MainBanner.module.scss';
import mainBanner from 'assets/images/mainBanner_img.png';
import Button from 'UIComponents/Button/Button';
// import playCircle from 'assets/icons/play_circle.png';

export default function MainBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={mainBanner} alt="" className={styles.img} />
            </div>
            <div className={styles.right}>
                {/* <div className={styles.lightBox}></div> */}
                <h1 className={styles.title}>One more friend</h1>
                <h2 className={styles.subtitle}>Thousands more fun!</h2>
                <p className={styles.text}>
                    Adopting a pet brings immeasurable joy, a lifelong companion, and a source of happiness who will
                    always be by your side for endless fun.
                </p>
                <div className={styles.buttons}>
                    <Button title="View Intro > " size="btn_158_t" />
                        {/* <img src={playCircle} alt="playCircle" className={styles.playCircle} /> */}
                    {/* </Button> */}

                    <Button title="Explore Now" size="btn_163" />
                </div>
            </div>
        </div>
    );
}
