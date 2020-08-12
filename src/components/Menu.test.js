import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu component tests', () => {
  it('Should change the state when select the dropdown', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
  });
});