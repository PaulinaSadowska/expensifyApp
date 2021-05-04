import { Header } from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { shallow } from 'enzyme';

test('should render header (snapshot)', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render header (enzyme)', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find("h1").text()).toBe("Expensify")
    expect(wrapper.find("NavLink").length).toBe(2)
})

test('should render header (enzyme snapshot)', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
})
