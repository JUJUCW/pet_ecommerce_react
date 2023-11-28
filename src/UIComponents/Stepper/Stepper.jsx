import styles from './Stepper.module.scss';

export default function Stepper() {
    const currentStep = 1;
    return (
        <section className={styles.container}>
            <div
                className={`${styles.step} ${currentStep === 1 ? styles.active : ''} ${
                    currentStep === 2 || currentStep === 3 || currentStep === 4 ? styles.checked : ''
                }`}
            >
                <div className={styles.stepCircle}></div>
                <div className={styles.stepLabel}>寄送地址</div>
                <div className={styles.stepLine}></div>
            </div>
            <div
                className={`${styles.step} ${currentStep === 2 ? styles.active : ''} ${
                    currentStep === 3 || currentStep === 4 ? styles.checked : ''
                }`}
            >
                <div className={styles.stepCircle}></div>
                <div className={styles.stepLabel}>運送方式</div>
                <div className={styles.stepLine}></div>
            </div>
            <div className={`${styles.step} ${currentStep === 3 ? styles.active : ''} ${currentStep === 4 ? styles.checked : ''}`}>
                <div className={styles.stepCircle}></div>
                <div className={styles.stepLabel}>付款條件</div>
            </div>
        </section>
    );
}
