
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './resources/components/Home';
import './resources/scss/index.scss';


function App() {
    return (
    <>
      <Home/>
    </>
    );
  }

ReactDOM.render(<App name="Your name"/>, document.getElementById('app'));