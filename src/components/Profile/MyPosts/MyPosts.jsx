import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost }) => {
  const postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  let newPostElement = React.createRef();

  const addNewPost = () => {
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={styles.posts}>
      my posts
      <div>
        <textarea ref={newPostElement} className={styles.textarea}></textarea>
        <div className={styles.buttonWrapper}>
          <input
            onClick={addNewPost}
            type='button'
            value='Add post'
            className={styles.button}
          />
        </div>
      </div>
      <div className={styles.item}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
