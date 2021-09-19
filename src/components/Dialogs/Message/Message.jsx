import styles from './Message.module.css';
import userPhoto from './../../../assets/images/user.png';

const Message = ({ message, author, photoMe }) => {
  return (
    <div className={styles.message}>
      {author.id === 0 ? (
        <div className={styles.myMessage}>
          <span>{message}</span>
          <img src={photoMe || userPhoto} alt='' />
        </div>
      ) : (
        <div className={styles.companionMessage}>
          <img src={userPhoto} alt='' />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

export default Message;
