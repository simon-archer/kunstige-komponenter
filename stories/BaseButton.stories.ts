import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components';
import '../src/components/atoms/BaseButton';

export default {
  title: 'Components/Atoms/BaseButton',
  component: 'base-button',
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] },
      defaultValue: 'primary'
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    }
  }
} as Meta;

const Template: Story = ({ variant, size, disabled }) => html`
  <base-button 
    variant="${variant}" 
    size="${size}" 
    ?disabled="${disabled}"
  >
    ${variant} Button
  </base-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  disabled: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'medium',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'medium',
  disabled: true
};
