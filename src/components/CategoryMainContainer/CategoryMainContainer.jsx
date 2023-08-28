import PetCard from 'UIComponents/PetCard/PetCard';
import styles from './CategoryMainContainer.module.scss';
import Button from 'UIComponents/Button/Button';
import Pagination from 'UIComponents/Pagination/Pagination';

export default function CategoryMainContainer() {
    const Checkbox = ({ id, label }) => (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
    return (
        <>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <h4 className={styles.filterTitle}>Filter</h4>
                    {/* Gender 篩選器 */}
                    <div className={styles.gender}>
                        <h5 className={styles.filter}>Gender</h5>
                        {['Boy', 'Girl'].map((gender) => (
                            <Checkbox key={gender} id={gender} label={gender} />
                        ))}
                    </div>
                    {/* Age 篩選器 */}
                    <div className={styles.age}>
                        <h5 className={styles.filter}>Age</h5>
                        {['0-1', '1-3', '3-8', '8+'].map((ageRange) => (
                            <Checkbox key={ageRange} id={ageRange} label={ageRange} />
                        ))}
                    </div>
                    {/* Size 篩選器*/}
                    <div className={styles.size}>
                        <h5 className={styles.filter}>Size</h5>
                        {['Under 12 kg', '12-25 kg', '25+ kg'].map((size) => (
                            <Checkbox key={size} id={size} label={size} />
                        ))}
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardContainerHeader}>
                        <div className={styles.categoryTitle}>
                            <h4 className={styles.filterTitle}>Small Dog</h4>
                            <span className={styles.cardCount}>12 poppies</span>
                        </div>
                        <Button title="Sort by: popular " size="btn_163" />
                    </div>
                    <div className={styles.cards}>
                        <PetCard />

                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
}
