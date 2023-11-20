import React from 'react';
import LoadingSpinner from '../loader/LoadingSpinner/LoadingSpinner';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Loading/Spinner',
  component: LoadingSpinner,
  argTypes: {
    color: { control: 'color' },
    size: { control: 'text' }
  },
} as Meta;

interface LoadingSpinnerProps {
  color?: string;
  size?: string;
}

const Template: Story<LoadingSpinnerProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingSpinner {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Color = Template.bind({});
Color.args = {
  color: 'red'
};

export const Size = Template.bind({});
Size.args = {
  size: '120px'
};
