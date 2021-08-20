import { profileAPI } from '../../API/API';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE_NEW_POST_TEXT';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 7 },
    { id: 2, message: `It's my first post!`, likesCount: 15 },
  ],
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 3, message: action.text}],
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
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

export const updateStatus = status => {
  // thunk
  return dispatch => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
