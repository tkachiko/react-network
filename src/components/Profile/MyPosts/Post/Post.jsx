import styles from './Post.module.css';

const Post = ({ message, likesCount }) => {
  return (
    <div className={styles.postItems}>
      <div className={styles.item}>
        <img
          src='https://avatarfiles.alphacoders.com/253/thumb-253458.jpg'
          alt=''
        />
        <span className={styles.post}>{message}</span>
      </div>
      <div className={styles.like}>
        <span className={styles.likeContainer}>
          <span>{likesCount}</span>
          <button className={styles.likeButton}>
            <div className={styles.heart}></div>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Post;
