import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addMonthsToDate } from '../../../utility/format/dayFormat';

export default {
  title: 'Utility/Date Formatter/Add Months',
  argTypes: {
    date: { control: 'date' },
    months: { control: 'number' },
  },
} as Meta;

interface Props {
  date: Date;
  months: number;
}

const DateFormatterComponent: React.FC<Props> = ({ date, months }) => (
  <div>{addMonthsToDate(date, months)}</div>
);

const Template: Story<Props> = (args) => <DateFormatterComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: new Date(),
  months: 3,
};
