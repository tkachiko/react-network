import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postsData = [
    { id: 1, message: 'Hi how are you?', likesCount: 7 },
    { id: 2, message: `It's my first post!`, likesCount: 15 },
  ];

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
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id} />
      </div>
    </div>
  );
};

export default MyPosts;
