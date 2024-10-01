import React from 'react';
import Card from './Card';
import Button from './Button';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    image: { control: 'text' },
    footer: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is some example content for the card.',
  image: 'https://via.placeholder.com/300x150',
  footer: <Button label="Learn More" backgroundColor="blue" />,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Card Without Image',
  content: 'This card does not have an image.',
  image: '',
  footer: <Button label="Read More" backgroundColor="gray" />,
};

export const CustomFooter = Template.bind({});
CustomFooter.args = {
  title: 'Card with Custom Footer',
  content: 'This card has a custom footer component.',
  image: 'https://via.placeholder.com/300x150',
  footer: <Button label="Custom Action" backgroundColor="green" />,
};

export const LongContent = Template.bind({});
LongContent.args = {
  title: 'Long Content Card',
  content:
    'This card has a significantly longer content section to demonstrate how text wraps within the card layout. It should handle multiple lines gracefully without breaking the design.',
  image: 'https://via.placeholder.com/300x150',
  footer: <Button label="View More" backgroundColor="pink" />,
};
