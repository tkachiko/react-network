import { profileAPI } from '../../API/API';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE_NEW_POST_TEXT';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 7 },
    { id: 2, message: `It's my first post!`, likesCount: 15 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setStatus = status => ({ type: SET_STATUS, status });

// thunk creators
export const getUserProfile = userId => {
  // thunk
  return dispatch => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = userId => {
  // thunk
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = userId => {
  // thunk
  return dispatch => {
    profileAPI.getStatus(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(data));
      }
    });
  };
};

export default profileReducer;
