import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import { configure, shallow } from 'enzyme';
import expect from 'expect'
import ToDoList from './toDoList';
import Todo from './todo';
import Adapter from 'enzyme-adapter-react-16';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedComponentsWithType
} from 'react-dom/test-utils';
configure({ adapter: new Adapter() });
const { JSDOM } = jsdom;
var todos =[
  {"id": 1,"text":"Unit test"},
  {"id":2,"text":"Code Coverage"}
]
  


const { document } = (new JSDOM(''));
global.document = document;
describe('TodoList', function() {
  it('should render a div with "todo-list" class', function() {
    const wrapper = shallow(<ToDoList todos={todos} />); 
    expect(wrapper.hasClass('todo-list'));
  });
});