import { useEffect, useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize),
  );

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    setPortionNumber(portionNumber);
  }, [currentPage]);

  return (
    <div className={cn(styles.paginator)}>
      {portionNumber > 1 && (
        <button
          onClick={() => setPortionNumber(portionNumber - 1)}
          className={cn(styles.button__left)}
        >
          <span className={cn(styles.doubleArrow, styles.left)}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polyline
                fill='none'
                stroke='#fff'
                points='10 14 5 9.5 10 5'
              ></polyline>
              <line
                fill='none'
                stroke='#fff'
                x1='16'
                y1='9.5'
                x2='5'
                y2='9.52'
              ></line>
            </svg>
          </span>
        </button>
      )}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChanged(currentPage - 1)}
          className={cn(styles.button__left)}
        >
          <span className={cn(styles.arrow, styles.left)}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polyline
                fill='none'
                stroke='#fff'
                stroke-width='1.03'
                points='13 16 7 10 13 4'
              ></polyline>
            </svg>
          </span>
        </button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber,
        )
        .map(page => {
          return (
            <div
              className={cn(
                {
                  [styles.selectedPage]: currentPage === page,
                },
                styles.pageNumber,
              )}
              key={page}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </div>
          );
        })}
      {currentPage < pagesCount && (
        <button
          onClick={() => onPageChanged(currentPage + 1)}
          className={cn(styles.button__right)}
        >
          <span className={cn(styles.arrow, styles.right)}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polyline
                fill='none'
                stroke='#fff'
                stroke-width='1.03'
                points='7 4 13 10 7 16'
              ></polyline>
            </svg>
          </span>
        </button>
      )}
      {portionNumber < portionCount && (
        <button
          onClick={() => setPortionNumber(portionNumber + 1)}
          className={cn(styles.button__right)}
        >
          <span className={cn(styles.doubleArrow, styles.right)}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polyline
                fill='none'
                stroke='#fff'
                points='10 5 15 9.5 10 14'
              ></polyline>
              <line
                fill='none'
                stroke='#fff'
                x1='4'
                y1='9.5'
                x2='15'
                y2='9.5'
              ></line>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

export default Paginator;
