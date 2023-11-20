import React, { useEffect, useState } from 'react';
import LoadingFillup from '../loader/LoadingFillup/LoadingFillup';
import { Story, Meta } from '@storybook/react';

interface LoadingFillupProps {
  value: number;
  containerSize?: string;
  fontSize?: string;
  backgroundColor?: string;
  fillColor?: string;
}

export default {
  title: 'Loading/Fill up',
  component: LoadingFillup,
  argTypes: {
    containerSize: { control: 'text' },
    fontSize: { control: 'text' },
    backgroundColor: { control: 'color' },
    fillColor: { control: 'color' }
  },
} as Meta;

const Template: Story<LoadingFillupProps> = ({ value, ...args }) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setInternalValue((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue > 100) {
          clearInterval(interval);
          return 100;
        }
        return newValue;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingFillup value={internalValue} {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  containerSize: '150px',
  fontSize: '20px',
  backgroundColor: '#000046',
  fillColor: '#1CBB5E'
};
