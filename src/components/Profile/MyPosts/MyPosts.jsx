import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, addPost, updateNewPostText, newPostText }) => {
  const postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  const addNewPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={styles.posts}>
      my posts
      <div>
        <textarea
          onChange={onPostChange}
          value={newPostText}
          placeholder="What's on your mind?"
          className={styles.textarea}
        />
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
