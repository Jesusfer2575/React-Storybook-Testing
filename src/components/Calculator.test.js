import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

describe('Calculator', () => {
  it('should render correctly Sum', () => {
    const component = shallow(<Calculator valueA={1} valueB={1} operation={1}/>);
  
    expect(component).toMatchSnapshot();
  });
  it('should render correctly Substraction', () => {
    const component = shallow(<Calculator valueA={1} valueB={1} operation={2}/>);
  
    expect(component).toMatchSnapshot();
  });
  it('should render correctly Multiplication', () => {
    const component = shallow(<Calculator valueA={1} valueB={1} operation={3}/>);
  
    expect(component).toMatchSnapshot();
  });
});