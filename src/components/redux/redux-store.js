import { combineReducers, createStore } from 'redux';
import profileResucer from './profile-reducer';
import dialogsResucer from './dialogs-reducer';
import sidebarResucer from './sidebar-reducer';
import usersResucer from './users-reducer';

const reducers = combineReducers({
  profilePage: profileResucer,
  dialogsPage: dialogsResucer,
  sidebar: sidebarResucer,
  usersPage: usersResucer,
});

const store = createStore(reducers);

export default store;
