import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: '1', date: '12/11/2020', text: 'some text 1', author: 'Valera', likes: '11'},
  {id: '2', date: '13/11/2020', text: 'some text 2', author: 'Valera', likes: '12'},
  {id: '3', date: '15/11/2020', text: 'some text 3', author: 'Valera', likes: '13'},
  {id: '4', date: '14/11/2020', text: 'some text 4', author: 'Valera', likes: '14'},
  {id: '5', date: '11/11/2020', text: 'some text 5', author: 'Valera', likes: '15'},
];

const dialogs = [
  {id: '1', name: 'Mykola Hubytskyi1'},
  {id: '2', name: 'Mykola Hubytskyi2'},
  {id: '3', name: 'Mykola Hubytskyi3'},
  {id: '4', name: 'Mykola Hubytskyi4'},
  {id: '5', name: 'Mykola Hubytskyi5'},
];

const messages = [
  {id: '1', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 1.', date: '11/11/2020'},
  {id: '2', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 2.', date: '11/11/2020'},
  {id: '3', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 3.', date: '11/11/2020'},
  {id: '4', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 4.', date: '11/11/2020'},
  {id: '5', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, sed 5.', date: '11/11/2020'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
