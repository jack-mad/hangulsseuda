import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { NextUIProvider } from '@nextui-org/react';
// import { createTheme, NextUIProvider } from '@nextui-org/react';

// const myDarkTheme = createTheme({
//   type: 'dark',
//   theme: {
//     colors: {
//       // brand colors
//       background: '#1d1d1d',
//       text: '#fff',
//       // you can also create your own color
//       myDarkColor: '#ff4ecd'
//       // ...  more colors
//     },
//     space: {},
//     fonts: {}
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    {/* theme={myDarkTheme} */}
    <NextUIProvider > 
      <Router />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
