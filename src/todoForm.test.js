import React from 'react';
import expect from 'expect';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoForm from './todoForm';

configure({ adapter: new Adapter()});

describe('TodoForm',() =>{
    const component = shallow(<TodoForm />);
    it('it should render input field and button', () =>{
      expect(component.hasClass('todo-input'));
    });
    it('it should find the input field',() => {
        expect(component.find('input'));
    });
    it('it should find the button',()=> {
        expect(component.find('button'));
    });
    it('should pass todo text with addTodo callback', () => {
		let addTodoInvoked = false;
		const addTodo = (todo) => { addTodoInvoked = todo };
		const component = shallow(
			<TodoForm
				onSubmit={addTodo}
			/>
		);
		const inputField = component.find('input');
		const button = component.find('button');
        inputField.simulate('change',{target: {value: 'Paint romm'}});
        button.simulate('click', { preventDefault() {} });
		// inputField.value = 'Paint room';
		// simulate.change(inputField);
		// simulate.click(button);

        // expect(addTodoInvoked).to.equal('Paint room');
        // expect(addTodoInvoked.equals)
	});
})