import React from 'react';

// import logo from './logo.svg';

import TodoListView from './Components/TodoListView';
import TodoCreator from './Components/TodoCreator';

import './App.css';

//1 - Create Components folder
//2 - Create TodoListView
//3 - Create new todo

function App() {

  //hook

  const [
    todoList
     , 
     setTodoList
  ] = React.useState(
      // [
      //     { label: "one", done: false }
      // ]
      [
          { label: "one", done: false },
          { label: "two", done: false },
          { label: "three", done: false }
      ]
  );

  return (
    <div className="App">

      <TodoListView todoListProp={todoList}/>

      <TodoCreator onAdd={
        todo => setTodoList([...todoList,todo])
      }/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;