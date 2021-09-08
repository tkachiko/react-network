import { authAPI, securityAPI } from '../API/API';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const STOP_SUBMIT = 'auth/STOP_SUBMIT';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  error: null as string | null,
  captchaUrl: null as string | null, // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case STOP_SUBMIT:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

// action creators
type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | null;
};
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

type StopSubmitActionType = {
  type: typeof STOP_SUBMIT;
  error: string;
};
export const stopSubmit = (error: string): StopSubmitActionType => ({
  type: STOP_SUBMIT,
  error,
});

type GetCaptchaUrlSuccesActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};
export const getCaptchaUrlSucces = (
  captchaUrl: string,
): GetCaptchaUrlSuccesActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

// thunk creators
export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null,
    setStatus?: any,
  ) =>
  async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      // success, get auth data
      dispatch(getAuthUserData());
      console.log('Logged in successfully!');
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let error =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'Some error';
      dispatch(stopSubmit(error));
      setStatus(response.data.messages);
      console.log('An error has occured');
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
