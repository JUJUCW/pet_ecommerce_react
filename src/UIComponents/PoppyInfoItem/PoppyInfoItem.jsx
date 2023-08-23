import styles from './PoppyInfoItem.module.scss';

export default function PoppyInfoItem(props) {
    const { SKU, age, vaccinated, color, size } = props;
    const poppyInfo = [
        { title: 'SKU', content: SKU },
        { title: 'Age', content: age },
        { title: 'Vaccinated', content: vaccinated },
        { title: 'Color', content: color },
        { title: 'Size', content: size },
    ];
    return (
        <>
            {poppyInfo.map((item, index) => (
                <div className={styles.poppyInfoItem} key={index}>
                    <span className={styles.poppyInfoItemTitle}>{item.title}</span>
                    <span className={styles.poppyInfoItemContent}>{item.content}</span>
                </div>
            ))}
        </>
    );
}
