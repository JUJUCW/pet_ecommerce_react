import styles from './Banner.module.scss';
import banner from 'assets/images/banner_img.png';
import Button from 'UIComponents/Button/Button';
// import playCircle from 'assets/icons/play_circle.png';
import paw from 'assets/icons/paw.png';

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {/* <div className={styles.lightBox}></div> */}
                <div className={styles.titleBox}>
                    <h1 className={styles.title}>Adoption</h1>
                    <img src={paw} alt="paw" className={styles.paw} />
                </div>
                <h2 className={styles.subtitle}>We need help. So do they.</h2>
                <p className={styles.text}>Adopt a pet and give it a home, it will be love you back unconditionally.</p>
                <div className={styles.buttons}>
                    <Button title="View Intro > " size="btn_158_t" />
                    {/* <img src={playCircle} alt="playCircle" className={styles.playCircle} /> */}
                    {/* </Button> */}

                    <Button title="Explore Now" size="btn_163" />
                </div>
            </div>
            <div className={styles.right}>
                <img src={banner} alt="" className={styles.img} />
            </div>
        </div>
    );
}
