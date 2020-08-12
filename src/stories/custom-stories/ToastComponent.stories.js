import React from 'react';
import ToastComponent from './ToastComponent';
// We have to add the styles from the css files in order to watch it on the storybook
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
  title: 'Example/Toast',
  component: ToastComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ToastComponent {...args} />;

export const Primary = Template.bind({}); 