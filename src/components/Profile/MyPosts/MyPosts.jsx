import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    dispatch(updateNewPostTextActionCreator(text));
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
