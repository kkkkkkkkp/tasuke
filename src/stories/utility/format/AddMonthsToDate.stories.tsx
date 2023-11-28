import React from 'react';
import { Story, Meta } from '@storybook/react';
import { addMonthsToDate, dayFormat1, dayFormat2, dayFormat3, dayFormat4, timeFormat, weekdayWithDate } from '../../../utility/format/dayFormat';

enum DateFormat {
  Format1 = 'dayFormat1',
  Format2 = 'dayFormat2',
  Format3 = 'dayFormat3',
  Format4 = 'dayFormat4',
  WeekdayWithDate = 'weekdayWithDate'
}


export default {
  title: 'Utility/Date Formatter/Add Months',
  argTypes: {
    date: { control: 'date' },
    months: { control: 'number' },
    format: { control: 'select', options: Object.values(DateFormat) }
  },
} as Meta;

interface Props {
  date: Date;
  months: number;
  format: DateFormat;
}


const DateFormatterComponent: React.FC<Props> = ({ date, months, format }) => {
  const formattedDate = addMonthsToDate(date, months);
  let displayDate;

  switch (format) {
      case DateFormat.Format1:
          displayDate = dayFormat1(formattedDate);
          break;
      case DateFormat.Format2:
          displayDate = dayFormat2(formattedDate);
          break;
      case DateFormat.Format3:
          displayDate = dayFormat3(formattedDate);
          break;
      case DateFormat.Format4:
          displayDate = dayFormat4(formattedDate);
          break;
      case DateFormat.WeekdayWithDate:
          displayDate = weekdayWithDate(formattedDate);
          break;
      default:
          displayDate = formattedDate.toString();
  }
  return <div>{displayDate}</div>;
};

const Template: Story<Props> = (args) => <DateFormatterComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: new Date(),
  months: 3,
  format: DateFormat.Format1
};
