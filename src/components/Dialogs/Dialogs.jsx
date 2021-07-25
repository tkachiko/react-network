import styles from './Dialogs.module.css';

const Dialogs = props => {
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={`${styles.dialog} ${styles.active}`}>Emmett</div>
          <div className={styles.dialog}>Marty</div>
          <div className={styles.dialog}>Lorraine</div>
          <div className={styles.dialog}>George</div>
          <div className={styles.dialog}>Jennifer</div>
          <div className={styles.dialog}>Einstein</div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Great Scott!</div>
          <div className={styles.message}>Nobody calls me chicken!</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
