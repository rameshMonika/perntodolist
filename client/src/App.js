import React,{ Fragment } from 'react';
import './App.css';

import InputTodo from "./component/InputToDo"

import ListToDos from "./component/ListToDos"

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo/>
      <ListToDos/>


      </div>

   
      
    </Fragment>
  );
}

export default App;
