import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Body from "./components/Body.js"


function App() {
  return (
    <>
    <Body />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  </>
);

