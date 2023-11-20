import React from 'react';
import { Story, Meta } from '@storybook/react';
import { timeFormat } from '../../../utility/format/dayFormat';

export default {
  title: 'Utility/Date Formatter/Time',
  argTypes: {
    date: { control: 'date' },
  },
} as Meta;

interface Props {
  date: Date;
}

const DateFormatterComponent: React.FC<Props> = ({ date }) => (
  <div>{timeFormat(date)}</div>
);

const Template: Story<Props> = (args) => <DateFormatterComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
