import React from 'react';

function Todo({todo, index, completeTodo, deleteTodo}) {
return(
    <div className="todo"  style={{textDecoration: todo.isCompleted ? 'line-through':''}}>
        {todo.text}
        <button onClick={()=>completeTodo(index)}>completed</button>
        <button onClick={()=> deleteTodo(index)}>Delete</button>
    </div>
)

}

export default Todo;