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
                <div className={styles.stepLabel}>Shipping address</div>
                <div className={styles.stepLine}></div>
            </div>
            <div
                className={`${styles.step} ${currentStep === 2 ? styles.active : ''} ${
                    currentStep === 3 || currentStep === 4 ? styles.checked : ''
                }`}
            >
                <div className={styles.stepCircle}></div>
                <div className={styles.stepLabel}>Shipping Method</div>
                <div className={styles.stepLine}></div>
            </div>
            <div
                className={`${styles.step} ${currentStep === 3 ? styles.active : ''} ${
                    currentStep === 4 ? styles.checked : ''
                }`}
            >
                <div className={styles.stepCircle}></div>
                <div className={styles.stepLabel}>Payment method</div>
            </div>
        </section>
    );
}
