import React from 'react';
import LoadingArcCircle from '../loader/LoadingArcCircle/LoadingArcCircle';
import { Story, Meta } from '@storybook/react';

interface LoaderProps {
  borderColors?: string[];
  containerSize?: number;
}

export default {
  title: 'Loading/Arc Circle',
  component: LoadingArcCircle,
  argTypes: {
    borderColors: { control: 'array' },
    containerSize: { control: 'number' }
  },
} as Meta;

const Template: Story<LoaderProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingArcCircle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  borderColors: ['#3498db', '#e74c3c', '#f9c922'],
  containerSize: 80
};
