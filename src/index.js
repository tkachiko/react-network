import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe } from './components/redux/state';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
          mewMessage={state.dialogsPage.mewMessage}
          updateNewMessageText={updateNewMessageText}
          sendMessage={sendMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
