import styles from './NextButton.module.scss';
import Button from 'UIComponents/Button/Button';

export default function NextButton() {
    return (
        <div className={styles.container}>
            <Button title="上一步" size="btn_158_p" />
            <Button title="下一步" size="btn_158_n" />
        </div>
    );
}
