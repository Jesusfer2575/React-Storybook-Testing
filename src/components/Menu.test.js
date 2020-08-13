import React from 'react';
import { shallow, render } from 'enzyme';
import Menu from './Menu';

describe('Menu component tests', () => {
  it('Should change the state when select the dropdown', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
  });

  it('Should change dropdown when click button', () => {
    const wrapper = render(<Menu />);
    const dropdownText = wrapper.find('#menuDropdown button').text();
    expect(dropdownText).toBe('Select an operation');
  })
});