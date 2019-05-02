import React,{useState} from 'react'
import Todo from './todo';
import TodoForm from './todoForm';
function App() {
  const [todos, setTodo] = useState([
    {text: 'learn about react',
     isCompleted: false},
    {text: 'meet friend',
      isCompleted: false}
  ]);

  const addTodo = text => {
    const newTodo = [...todos, {text}];
    setTodo(newTodo);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodo(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index)=> (<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}></Todo>))}
      </div>
      <div className="todo-form">
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  )

}

export default App;