import React from 'react';
import expect from 'expect';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from './todo';

configure({ adapter: new Adapter()});

describe('Todo',()=> {
    it('it shoul find class of todo',()=> {
        const component = shallow(<Todo todo={{}} />);
        expect(component.hasClass('todo'));
    })
})