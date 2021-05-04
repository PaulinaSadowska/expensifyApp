import { PageNotFound } from '../../components/PageNotFound';
import React from 'react';
import { shallow } from 'enzyme';


test('should render expense dashboard', () => {
    const wrapper = shallow(<PageNotFound/>);
    expect(wrapper).toMatchSnapshot();
})