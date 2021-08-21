import styles from './Paginator.module.css';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pages}>
      {pages.map(page => {
        return (
          <span
            className={`${styles.page} ${
              currentPage === page && styles.selectedPage
            }`}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
