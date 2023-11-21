import PetCard from 'UIComponents/PetCard/PetCard';
import styles from './CategoryMainContainer.module.scss';
import Button from 'UIComponents/Button/Button';
import Pagination from 'UIComponents/Pagination/Pagination';
import { useEffect, useMemo, useState } from 'react';
import { getAllDogs } from 'api/dog';
let itemsPerPage = 10;

export default function CategoryMainContainer() {
    const [petCards, setPetCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * itemsPerPage;
    //     const lastPageIndex = firstPageIndex + itemsPerPage;
    //     return petCards.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);
    //
    // // const [filterPetCards, setFilterPetCards] = useState([]);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // // const currentItems = filterPetCards.slice(indexOfFirstItem, indexOfLastItem);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };
    const Checkbox = ({ id, label }) => (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={id} />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );

    useEffect(() => {
        const getPetCard = async () => {
            try {
                const data = await getAllDogs();
                if (data.status === 'error') {
                    console.log(data.message);
                    return;
                }
                if (data) {
                    setPetCards(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getPetCard();
    }, []);

    const currentItems = petCards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                        {['Small', 'Medium', 'Big'].map((size) => (
                            <Checkbox key={size} id={size} label={size} />
                        ))}
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardContainerHeader}>
                        <div className={styles.categoryTitle}>
                            <h4 className={styles.filterTitle}>All Dogs</h4>
                            <span className={styles.cardCount}>
                                {/* {petCards.length} */}
                                poppies
                            </span>
                        </div>
                        <Button title="Sort by: popular " size="btn_163" />
                    </div>
                    <div className={styles.cards}>
                        {currentItems.map((key) => {
                            return (
                                <PetCard
                                    key={key._id}
                                    SKU={key.SKU}
                                    gene={key.gene}
                                    age={key.age}
                                    title={key.title}
                                    images={key.images}
                                    location={key.location}
                                />
                            );
                        })}
                        {/* {currentItems.map((petCard, index) => (
                            <PetCard
                                key={index}
                                SKU={petCard.SKU}
                                gene={petCard.gene}
                                age={petCard.age}
                                title={petCard.title}
                                images={petCard.images}
                                location={petCard.location}
                            />
                        ))} */}
                    </div>
                    {/* <Pagination
                        currentPage={currentPage}
                        // totalItems={petCards.length}
                        pageSize={itemsPerPage}
                        onPageChange={(page) => setCurrentPage(page)}
                        // totalPages={totalPages}
                        // totalPages={Math.ceil(filterPetCards.length / itemsPerPage)}
                        // onPageChange={handlePageChange}
                    /> */}
                </div>
            </div>
        </>
    );
}
