import React from 'react';
import { Story, Meta } from '@storybook/react';
import { limitCount, limitType } from '../utility/limitText';


const LimitCountComponent: React.FC<limitType> = ({ content, limit, dot }) => (
  <div>{limitCount({ content, limit, dot })}</div>
);

export default {
  title: 'Utility/LimitCount',
  component: LimitCountComponent,
  argTypes: {
    content: { control: 'text' },
    limit: { control: 'number' },
    dot: { control: 'boolean' }
  },
} as Meta;

const Template: Story<limitType> = (args) => <LimitCountComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a sample text to demonstrate the limitCount functionality in action.",
  limit: 5,
  dot: true
};

export const NoDots = Template.bind({});
NoDots.args = {
  ...Default.args,
  dot: false
};
