import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} />);

  return (
    <div className={styles.posts}>
      my posts
      <div>
        <textarea className={styles.textarea}></textarea>
        <div className={styles.buttonWrapper}>
          <input type='button' value='Add post' className={styles.button} />
        </div>
      </div>
      <div className={styles.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
