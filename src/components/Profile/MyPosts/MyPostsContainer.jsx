import StoreContext from '../../../StoreContext';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
      store => {
        const state = store.getState();

        const addNewPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChange = text => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addNewPost}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
