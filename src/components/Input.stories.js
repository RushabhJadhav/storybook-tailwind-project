import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
      },
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  type: 'password',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  type: 'email',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
  placeholder: 'No label input',
  type: 'text',
};
