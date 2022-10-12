import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//массив для имен в DIALOGS
let arrayNames = [
    {url: 1, name: 'Dima'},
    {url: 2, name: 'Polya'},
    {url: 3, name: 'Eranga'},
    {url: 4, name: 'Budik'}
]

//Массив для сообщений в DIALOGS
let arrayMessages = [
    {id: 1, message: 'Hi, i-a Dima'},
    {id: 2, message: 'I am Polya, and I am funny'},
    {id: 3, message: 'Just Eranga'},
    {id: 4, message: 'I-am Budik'}
]

export {arrayNames, arrayMessages}