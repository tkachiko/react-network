import React, { lazy } from 'react';
import { connect, Provider } from 'react-redux';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import withSuspect from './HOC/WithSuspect';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginPage';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import store from './redux/redux-store';

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer'),
);
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <Switch>
          <div className='app-wrapper__content'>
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />
            <Route
              path='/dialogs/:dialogId?'
              render={withSuspect(DialogsContainer)}
            />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

const SocialNetworkApp = props => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SocialNetworkApp;
