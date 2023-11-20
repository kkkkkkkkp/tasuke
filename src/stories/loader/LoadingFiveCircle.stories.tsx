import React from 'react';
import LoadingFiveCircle from '../../loader/LoadingFiveCircle/LoadingFiveCircle';
import { Story, Meta } from '@storybook/react';

interface LoadingFiveCirclerProps {
  colors?: string[];
  size?: number;
}

export default {
  title: 'Loading/Five Circle',
  component: LoadingFiveCircle,
  argTypes: {
    colors: { control: 'array' },
    size: { control: 'number' }
  },
} as Meta;

const Template: Story<LoadingFiveCirclerProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingFiveCircle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  colors: ['#ff4f4f', '#4fafff', '#ffd24f', '#49ff4f', '#d24fff'],
  size: 20
};
