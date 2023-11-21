import classnames from 'classnames';
import { DOTS, usePagination } from '../Hook/usePagination';

import styles from './Pagination.module.scss';
// import { Row } from 'react-bootstrap';

// export default function Pagination(props) {
// const { data, RenderComponent, pageLimit, dataLimit } = props;

// // 總分頁數
// // const pages = Math.ceil(data.length / dataLimit);
// // 當前頁面
// const [currentPage, setCurrentPage] = useState(1);
// // 下一頁
// const goToNextPage = () => {
//     setCurrentPage((page) => page + 1);
// };
// // 上一頁
// const goToPreviousPage = () => {
//     setCurrentPage((page) => page - 1);
// };
// // 跳轉頁面
// const changePage = (e) => {
//     const pageNumber = Number(e.target.textContent);
//     setCurrentPage(pageNumber);
// };
// // 計算目前分頁數
// const getPaginationGroup = () => {
//     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
//     return new Array(pageLimit).fill().map((_, index) => start + index + 1);
// };

// return (
// <div>
//     <div className={styles.container}>
//         <Row>
//             {getPaginationGroup().map((d, index) => (
//                 <RenderComponent key={index} data={d} />
//             ))}
//         </Row>
//     </div>
//     <div className={styles.pagination}>
//         <button
//             onClick={goToPreviousPage}
//             className={`${styles.prev} ${currentPage === 1 ? styles.disabled : ''}`}
//         >
//             prev
//         </button>
//         {getPaginationGroup().map((item, index) => (
//             <button
//                 key={index}
//                 onClick={changePage}
//                 className={`${styles.paginationItem} ${currentPage === item ? styles.active : null}`}
//             >
//                 <span>{item}</span>
//             </button>
//         ))}
//         <button
//             onClick={goToNextPage}
//             className={`${styles.next} ${currentPage === pages || pages === 0 ? styles.disabled : ''}`}
//         >
//             next
//         </button>
//     </div>
// </div>
//     <div className={styles.pagination}>
//         <span className={styles.page}>-</span>
//         <span className={styles.page}>1</span>
//         <span className={styles.page}>2</span>
//         <span className={styles.page}>3</span>
//         <span className={styles.page}>4</span>
//         <span className={styles.page}>5</span>
//         <span className={styles.page}>6</span>
//         <span className={styles.page}>7</span>
//         <span className={styles.page}>...</span>
//     </div>
// );
// }
// Pagination.prototype = {
//     currentPage:PropTypes.number.isRequired,
// }

export default function Pagination(props) {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;
    const paginationRange = usePagination({ totalCount, siblingCount, currentPage, pageSize });
    // console.log(paginationRange.length)
    // if (currentPage === 0 || paginationRange.length < 2) {
    //     return null;
    // }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };
    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    // const lastPage = paginationRange[paginationRange.length - 1];
    const lastPage = 2;
    console.log(paginationRange)
    return (
        <ul className={classnames(styles.pagination, { [className]: className })}>
            <li className={classnames(styles.pageItem, { [styles.disabled]: currentPage === 1 })} onClick={onPrevious}>
                <div className="arrow left">leftarrow</div>
            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return (
                        <li key={index} className={styles.pageItem}>
                            &#8230;
                        </li>
                    );
                }
                return (
                    <li
                        key={index}
                        className={classnames(styles.pageItem, {
                            [styles.selected]: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames(styles.pageItem, { [styles.disabled]: currentPage === lastPage })}
                onClick={onNext}
            >
                <div className="arrow right"> rightarrow </div>
            </li>
        </ul>
    );
}
