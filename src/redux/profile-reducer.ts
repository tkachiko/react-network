import { profileAPI } from '../API/API';
import { PostType, ProfileType, PhotosType } from '../types/types';

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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  error: null as string | null,
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.text, likesCount: 0 },
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
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    case SET_USER_PROFILE:
    case SAVE_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };
    case STOP_SUBMIT:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

// action creators
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType,
): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type AddPostActionType = {
  type: typeof ADD_POST;
  text: string;
};
export const addPost = (text: string): AddPostActionType => ({
  type: ADD_POST,
  text,
});

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SetPhotoActionType = {
  type: typeof SET_PHOTO;
  photos: PhotosType;
};
export const setPhoto = (photos: PhotosType): SetPhotoActionType => ({
  type: SET_PHOTO,
  photos,
});

type SaveProfileSuccessActionType = {
  type: typeof STOP_SUBMIT;
  error: string;
};
export const saveProfileSuccess = (profile: ProfileType) => ({
  type: SAVE_PROFILE_SUCCESS,
  profile,
});
export const stopSubmit = (error: string): SaveProfileSuccessActionType => ({
  type: STOP_SUBMIT,
  error,
});

// thunk creators
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const updatePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.updatePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};

export const saveProfile =
  (profile: ProfileType, setEditMode: any) =>
  async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
      setEditMode(false);
    } else {
      let error =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit(error));
      setEditMode(true);
    }
  };

export default profileReducer;
