import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/store';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));

  let newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={styles.posts}>
      my posts
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={newPostText}
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
