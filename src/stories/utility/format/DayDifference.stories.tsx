import React from 'react';
import { Story, Meta } from '@storybook/react';
import { getDifference } from '../../../utility/format/dayFormat';

export default {
  title: 'Utility/Date Formatter/Days Difference',
  argTypes: {
    startDay: { control: 'date' },
    endDay: { control: 'date' },
  },
} as Meta;

interface Props {
  startDay: Date;
  endDay: Date;
}

const DateFormatterComponent: React.FC<Props> = ({ startDay, endDay }) => (
  <div>
    {getDifference(startDay.toISOString(), endDay.toISOString())}
  </div>
);

const Template: Story<Props> = (args) => <DateFormatterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  startDay: new Date(),
  endDay: new Date(new Date().setDate(new Date().getDate() + 4)), // End day is 4 days from now
};
