import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './toDoList';
import TodoInput from './todoForm';

class App extends React.Component {

  state={
    todos:[]
  }

  addTodo = todo => {
    let newTodo = [todo,...this.state.todos];
    this.setState({
        todos: newTodo
    })
}

  render() {
    return(
      <div className="App">
        <TodoInput onSubmit = {this.addTodo} />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
  
  // render (
  //   <div className="App">
  //     <TodoInput onSubmit={this.addTodo}/>
  //     <TodoList />
  //   </div>
  // );
}

export default App;
