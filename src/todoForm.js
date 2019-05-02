import React from 'react';
import shortid from 'shortid';

export default class toDoForm extends React.Component {
    state = {
        text: ''
    }

    handleChange= event => {
        this.setState({
            text:event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            text: this.state.text,
            complete: false
        });
    }

    render() {
        return(
            <div className="todo-input">
                <input placeholder="todo..." 
                ref="todoInputField"
                value={this.state.text}
                onChange ={this.handleChange}/>
                <button 
                ref="todoInputButton"
                onClick={this.handleSubmit}>add todo</button>
            </div>
        )
    }
}
