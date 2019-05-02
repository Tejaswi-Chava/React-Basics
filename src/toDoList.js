import React from 'react';
import Todo from './todo';
export default class TodoList extends React.Component {

    render() {
        const todos = this.props.todos;
        return <div className="todo-list">
            {
                todos.map(todo => (
                    <div key={todo.id}><Todo todo={todo} /></div>

                ))
            }
        </div>
    }

}