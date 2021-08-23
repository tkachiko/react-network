import { useEffect, useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil((currentPage)/portionSize));

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage],
  );

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button className={styles.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber,
        )
        .map(page => {
          return (
            <span
              className={`${styles.page} ${
                currentPage === page && styles.selectedPage
              }`}
              key={page}
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button className={styles.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
