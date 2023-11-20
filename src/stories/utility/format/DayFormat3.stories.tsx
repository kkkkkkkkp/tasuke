import React from 'react';
import { Story, Meta } from '@storybook/react';
import { dayFormat3 } from '../../../utility/format/dayFormat';

export default {
  title: 'Utility/Date Formatter/Format Day 3',
  argTypes: {
    date: { control: 'date' },
  },
} as Meta;

interface Props {
  date: Date;
}

const DateFormatterComponent: React.FC<Props> = ({ date }) => (
  <div>{dayFormat3(date)}</div>
);

const Template: Story<Props> = (args) => <DateFormatterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
