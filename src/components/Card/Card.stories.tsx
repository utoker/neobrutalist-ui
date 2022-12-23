import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Brutalist-UI/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Hell = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Hell.args = {
  title: 'Hell',
  description: 'This is a description',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Hell',
  description: 'This is a description',
};
