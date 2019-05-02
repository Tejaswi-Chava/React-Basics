import React, { useState } from 'react';

const TodoForm = ({addTodo})=>{
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }
    return(
        <div className="todo-input">
            <input type="text" placeholder="add todo..." value={value} onChange={e => setValue(e.target.value)} />
            <button className="submit-button" onClick={handleSubmit}>add todo</button>
        </div>
    )
}

export default TodoForm;