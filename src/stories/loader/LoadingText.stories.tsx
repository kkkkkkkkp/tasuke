import LoadingText from '../../loader/LoadingText/LoadingText';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Loading/Text',
  component: LoadingText,
} as Meta;

const Template: Story = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', ...args.style }}>
    <LoadingText />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  style: {}
};
