import { usersAPI } from '../API/API';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id !== action.userID),
      };
    default:
      return state;
  }
};

// action creators
export const followSuccess = userID => ({ type: FOLLOW, userID });
export const unfollowSuccess = userID => ({ type: UNFOLLOW, userID });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userID,
});

// thunk creators
export const requestUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const response = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};

const toggleFollowing = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = userId => async dispatch => {
  toggleFollowing(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = userId => async dispatch => {
  toggleFollowing(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;
