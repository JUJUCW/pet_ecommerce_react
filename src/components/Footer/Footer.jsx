import NavItem from 'UIComponents/NavItem/NavItem';
import styles from './Footer.module.scss';
import logo from 'assets/icons/logo.png';
import fb from 'assets/icons/facebook.png';
import twitter from 'assets/icons/twitter.png';
import ig from 'assets/icons/instagram.png';
import yt from 'assets/icons/youtube.png';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.registerContainer}>
                <div className={styles.left}>
                    <p className={styles.context}>Register now so you don't miss our programs</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} type="text" placeholder="Enter your Email" />
                        <button className={styles.button}>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className={styles.navBarContainer}>
                <div className={styles.navLeft}>
                    <NavItem title="Home" />
                    <NavItem title="Category" />
                    <NavItem title="About" />
                    <NavItem title="Contact" />
                </div>
                <div className={styles.navRight}>
                    <img src={fb} alt="fb" className={styles.socialMedia} />
                    <img src={twitter} alt="fb" className={styles.socialMedia} />
                    <img src={ig} alt="fb" className={styles.socialMedia} />
                    <img src={yt} alt="fb" className={styles.socialMedia} />
                </div>
            </div>
            <div className={styles.copyRight}>
                <p className="rights">© 2022 Monito. All rights reserved.</p>
                <img src={logo} alt="logo" className={styles.img} />
                <p className="term">Terms of Service &nbsp; &nbsp; &nbsp; Privacy Policy</p>
            </div>
        </div>
    );
}
