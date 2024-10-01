import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to My App',
  subtitle: 'Building with React and Storybook',
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  title: 'Simple Header',
  subtitle: '',
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  title: 'Custom Title',
  subtitle: 'This is a custom subtitle for the header.',
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  title: 'This is a Very Long Header Title to Test Text Wrapping and Layout in the Header Component',
  subtitle: 'Subtitle remains the same',
};
