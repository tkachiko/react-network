import { profileAPI } from '../API/API';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE_NEW_POST_TEXT';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

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
        posts: [...state.posts, { id: 3, message: action.text }],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

// action creators
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = text => ({ type: ADD_POST, text });
export const deletePost = postId => ({ type: DELETE_POST, postId });
export const setStatus = status => ({ type: SET_STATUS, status });

// thunk creators
export const getUserProfile = userId => async dispatch => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
