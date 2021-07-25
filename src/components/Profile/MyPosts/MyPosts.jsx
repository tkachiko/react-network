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
        <Post message="Hi how are you?" likesCount="7" />
        <Post message="It's my first post!" likesCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
