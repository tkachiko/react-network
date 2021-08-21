import styles from './Post.module.css';

const Post = ({message, likesCount}) => {
  return (
    <div>
      <div className={styles.item}>
        <img src='https://avatarfiles.alphacoders.com/253/thumb-253458.jpg' alt='avatar' />
        <span className={styles.post}>{message}</span>
      </div>
      <div>
        <span>Like {likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
