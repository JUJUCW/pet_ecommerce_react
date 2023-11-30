import styles from './NextButton.module.scss';
import Button from 'UIComponents/Button/Button';

export default function NextButton() {
    return (
        <div className={styles.container}>
            <Button title="Previous" size="btn_158_p" />
            <Button title="Next" size="btn_158_n" />
        </div>
    );
}
