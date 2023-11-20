import React from 'react';
import BouncingDotsLoader from '../loader/BouncingDotsLoader/BouncingDotsLoader';
import { Story, Meta } from '@storybook/react';

interface BouncingDotsLoaderProps {
  dotColor?: string;
  size?: string;
}

export default {
  title: 'Loading/Bouncing Dots',
  component: BouncingDotsLoader,
  argTypes: {
    dotColor: { control: 'color' },
    size: { control: 'text' }
  },
} as Meta;

const Template: Story<BouncingDotsLoaderProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <BouncingDotsLoader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  dotColor: 'pink',
  size: '10px'
};
