import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

describe('Calculator', () => {
  it('should render correctly Sum', () => {
    const wrapper = shallow(<Calculator valueA={1} valueB={1} operation={1}/>);
  
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly Substraction', () => {
    const wrapper = shallow(<Calculator valueA={1} valueB={1} operation={2}/>);
  
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly Multiplication', () => {
    const wrapper = shallow(<Calculator valueA={1} valueB={1} operation={3}/>);
  
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one single div', () => {
    const wrapper = shallow(<Calculator valueA={1} valueB={1} operation={3}/>);
  
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should have specific text inside the div', () => {
    const wrapper = shallow(<Calculator valueA={3} valueB={9} operation={3}/>);
    const text = wrapper.find('div').text();
    expect(text).toBe('The multiplication of 3 and 9 is: 27');
  });
});