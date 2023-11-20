import React from 'react';
import SuccessPage from '../../view/SuccessPage/SuccessPage';
import { Story, Meta } from '@storybook/react';

interface SuccessPageProps {
  text?: string;
  subText?: string;
  textColor?: string;
  subTextColor?: string;
  textSize?: string;
  subTextSize?: string;
  svgSize?: number;
  backgroundColor?: string;
  subTextBool?: boolean;
}

export default {
  title: 'View/Success',
  component: SuccessPage,
  argTypes: {
    text: { control: 'text' },
    subText: { control: 'text' },
    textColor: { control: 'color' },
    subTextColor: { control: 'color' },
    textSize: { control: 'text' },
    subTextSize: { control: 'text' },
    svgSize: { control: 'number' },
    backgroundColor: { control: 'color' },
    subTextBool: { control: 'boolean' }
  },
} as Meta;

const Template: Story<SuccessPageProps> = (args) => <SuccessPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Completed!',
  subText: 'ex:)Your next action is ___ .',
  textColor: '#FFFFFF',
  subTextColor: '#FFF',
  textSize: '1.5em',
  subTextSize: '0.8rem',
  svgSize: 100,
  backgroundColor: '#4CAF50',
  subTextBool: true
};

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  text: 'Payment Completed!',
  subText: 'You will receive the receipt.'
};

export const WithoutSubText = Template.bind({});
WithoutSubText.args = {
  ...Default.args,
  subTextBool: false
};
