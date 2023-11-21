import { useMemo } from 'react';
// import styles from './Pagination.module.scss';

export const DOTS = '...';
export const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export function usePagination(props) {
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

    const { totalCount, pageSize, currentPage, siblingCount = 1 } = props;

    console.log('totalCount', totalCount);
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, currentPage, siblingCount]);

    return paginationRange
}
// Pagination.prototype = {
//     currentPage:PropTypes.number.isRequired,
// }
