import { LoginPage } from '../../components/LoginPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render login page', () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />);
    expect(wrapper).toMatchSnapshot();
})

test('should logout button call logout axction', () => {
    const login = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={login} />);
    wrapper.find('button').simulate('click')
    expect(login).toHaveBeenCalled()
})