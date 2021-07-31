import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  // debugger
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Route
          path='/profile'
          render={() => (
            <Profile
              posts={props.state.profilePage.posts}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path='/dialogs'
          render={() => (
            <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              sendMessage={props.sendMessage}
              mewMessage={props.state.dialogsPage.newMessageText}
              updateNewMessageText={props.updateNewMessageText}
            />
          )}
        />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
