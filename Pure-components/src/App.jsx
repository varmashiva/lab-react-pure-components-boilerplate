import React from 'react';
import './App.css';
import MyPureComponent from './Components/MyPureComponent';
import Myregularcomp from './Components/Myregularcomp';
const App = () => {
  return (
    <div>
      <MyPureComponent />
      <Myregularcomp />
    </div>
  );
};

export default App;
