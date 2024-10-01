import '../src/index.css';
import React from 'react';

// Global Decorators
export const decorators = [
  (Story) => (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Story />
    </div>
  ),
];

// Global Parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
