import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './components/redux/state';

export let rerenderEntireTree = state => {
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
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
