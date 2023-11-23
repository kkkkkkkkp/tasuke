import React from 'react';
import { capitalizeLetterOfEachWord } from '../../utility/capitalText';
import { Story, Meta } from '@storybook/react';

interface CapitalizeComponentProps {
  text: string;
}

const CapitalizeComponent: React.FC<CapitalizeComponentProps> = ({ text }) => (
  <div>{capitalizeLetterOfEachWord(text)}</div>
);



export default {
    title: 'Utility/Capitalize',
    component: CapitalizeComponent,
    argTypes: {
      text: { control: 'text' },
    },
  } as Meta;
  
  const Template: Story<{ text: string }> = (args) => <CapitalizeComponent {...args} />;
  
export const Default = Template.bind({});
  Default.args = {
    text: 'hello world',
  };