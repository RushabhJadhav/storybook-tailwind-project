import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: ['blue', 'gray', 'green', 'pink', 'red'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  backgroundColor: 'blue',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  backgroundColor: 'gray',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  backgroundColor: 'green',
  size: 'large',
};

export const Red = Template.bind({});
Red.args = {
  label: 'Red Button',
  backgroundColor: 'red',
  size: 'medium',
};
