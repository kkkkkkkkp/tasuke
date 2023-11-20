import React from 'react';
import { capitalizeFirstLetter } from '../../utility/capitalText';
import { Story, Meta } from '@storybook/react';

interface CapitalizeComponentProps {
  text: string;
}

const CapitalizeComponent: React.FC<CapitalizeComponentProps> = ({ text }) => (
  <div>{capitalizeFirstLetter(text)}</div>
);



export default {
    title: 'Utility/Capitalize First Letter',
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