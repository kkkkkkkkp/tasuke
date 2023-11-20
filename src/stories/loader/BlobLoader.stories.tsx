import React from 'react';
import BlobLoader from '../../loader/BlobLoader/BlobLoader';
import { Story, Meta } from '@storybook/react';

interface BlobLoaderProps {
  backgroundColor?: string;
  size?: string;
}

export default {
  title: 'Loading/Blob',
  component: BlobLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: 'text' }
  },
} as Meta;

const Template: Story<BlobLoaderProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <BlobLoader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#ff6b6b',
  size: '100px'
};
