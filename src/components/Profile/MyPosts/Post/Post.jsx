import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src='https://avatarfiles.alphacoders.com/253/thumb-253458.jpg' alt='avatar' />
      <span className={styles.post}>post</span>
    </div>
  );
};

export default Post;
