import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  const state = props.store.getState();

  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = text => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addNewPost}
      newPostText={state.profilePage.newPostText}
      posts={state.profilePage.posts}
    />
  );
};

export default MyPostsContainer;
