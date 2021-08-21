import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// action creators
export const inisializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// thunk creators
export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(inisializedSuccess());
  })
};

export default appReducer;
