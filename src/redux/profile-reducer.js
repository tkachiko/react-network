import { profileAPI } from '../API/API';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE_NEW_POST_TEXT';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
const STOP_SUBMIT = 'STOP_SUBMIT';

const initialState = {
  posts: [
    { id: 1, message: 'Hi how are you?', likesCount: 7 },
    { id: 2, message: `It's my first post!`, likesCount: 15 },
  ],
  profile: null,
  name: null,
  status: '',
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.text },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_PHOTO:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case SET_USER_PROFILE:
    case SAVE_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };
      case STOP_SUBMIT:
            return {...state, error: action.error };
    default:
      return state;
  }
};

// action creators
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const addPostActionCreator = text => ({ type: ADD_POST, text });
export const deletePost = postId => ({ type: DELETE_POST, postId });
export const setStatus = status => ({ type: SET_STATUS, status });
export const setPhoto = photos => ({ type: SET_PHOTO, photos });
export const saveProfileSuccess = profile => ({
  type: SAVE_PROFILE_SUCCESS,
  profile
});
export const stopSubmit = error => ({ type: STOP_SUBMIT, error });

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

export const updatePhoto = file => async dispatch => {
  const response = await profileAPI.updatePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};

export const saveProfile = (profile, setEditMode) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
    setEditMode(false);
  } 
  else {
    let error =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'Some error';
    dispatch(stopSubmit(error));
    setEditMode(true);
  }
};

export default profileReducer;
