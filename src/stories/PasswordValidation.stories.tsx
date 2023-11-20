import React, { useState } from 'react';
import { PasswordOptions, validatePassword } from '../utility/regex';
import { Meta, Story } from '@storybook/react';

interface Props {
    capital?: boolean;
    special?: boolean;
    minLength?: number;
  }

const PasswordValidationComponent: React.FC<Props> = (props) => {
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      setValidationMessage(validatePassword(event.target.value, props));
    };
  
    return (
      <div>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" />
        <div>{validationMessage}</div>
      </div>
    );
};


export default {
    title: 'Utility/Password Validation',
    component: PasswordValidationComponent,
    argTypes: {
      capital: {
        control: 'boolean',
        defaultValue: false,
      },
      special: {
        control: 'boolean',
        defaultValue: false,
      },
      minLength: {
        control: 'number',
        defaultValue: 0,
      },
    },
} as Meta;
  
const Template: Story = (args) => <PasswordValidationComponent {...args} />;
  
export const Default = Template.bind({});
  Default.args = {};
  
export const WithCapitalLetter = Template.bind({});
  WithCapitalLetter.args = {
    capital: true,
};
  
export const WithSpecialCharacter = Template.bind({});
  WithSpecialCharacter.args = {
    special: true,
};
  
export const WithCapitalAndSpecial = Template.bind({});
  WithCapitalAndSpecial.args = {
    capital: true,
    special: true,
};