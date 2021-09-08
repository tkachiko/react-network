import { connect } from 'react-redux';
import {
  addPost,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPost(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
