import React from 'react';
import './index.css';
import Home from '../app/home';

export const metadata = {
  title: "Cyams Portfolio",
  description: "Welcome to my portfolio site",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <Home />;
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
