import React from 'react';
import BookLoader from '../loader/BookLoader/BookLoader';
import { Story, Meta } from '@storybook/react';

interface BookLoaderProps {
  color?: string;
  pageCount?: number;
}

export default {
  title: 'Loading/Book',
  component: BookLoader,
  argTypes: {
    color: { control: 'color' },
    pageCount: { control: 'number' }
  },
} as Meta;

const Template: Story<BookLoaderProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <BookLoader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: 'green',
  pageCount: 4
};
