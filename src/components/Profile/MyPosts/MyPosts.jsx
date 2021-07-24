import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      my posts
      <div>
        <textarea className={styles.textarea}></textarea>
        <div className={styles.buttonWrapper}>
          <input type='button' value='Add post' className={styles.button} />
        </div>
      </div>
      <div className={styles.item}>
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
