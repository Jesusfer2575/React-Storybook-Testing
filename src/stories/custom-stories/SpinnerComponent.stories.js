import React from 'react';
import SpinnerComponent from './SpinnerComponent';
// We have to add the styles from the css files in order to watch it on the storybook
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
  title: 'Example/Spinner',
  component: SpinnerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SpinnerComponent {...args} />;

export const Border = Template.bind({}); 
Border.args = {
  animation: 'border',
  label: 'Border animation',
};

export const Grow = Template.bind({}); 
Grow.args = {
  animation: 'grow',
  label: 'Grow animation',
};