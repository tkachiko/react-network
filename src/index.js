import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Emmett' },
  { id: 2, name: 'Marty' },
  { id: 3, name: 'Lorraine' },
  { id: 4, name: 'George' },
  { id: 5, name: 'Jennifer' },
  { id: 6, name: 'Einstein' },
];

const messages = [
  { id: 1, message: 'Great Scott!' },
  { id: 2, message: 'Nobody calls me chicken!' },
];

const posts = [
  { id: 1, message: 'Hi how are you?', likesCount: 7 },
  { id: 2, message: `It's my first post!`, likesCount: 15 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
