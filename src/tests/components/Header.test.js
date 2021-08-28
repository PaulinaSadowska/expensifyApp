import { Header } from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';

test('should render header (snapshot)', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header startLogout={() => { }} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render header (enzyme)', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper.find("h1").text()).toBe("Expensify")
    expect(wrapper.find("Link").length).toBe(1)
})

test('should render header (enzyme snapshot)', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
})

test('should logout button call logout axction', () => {
    const logout = jest.fn()
    const wrapper = shallow(<Header startLogout={logout} />);
    wrapper.find('button').simulate('click')
    expect(logout).toHaveBeenCalled()
})
