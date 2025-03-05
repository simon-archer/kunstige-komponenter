import { html } from 'lit';
import { Story, Meta } from '@storybook/web-components';
import '../src/components/molecules/ki-sidebar';

export default {
  title: 'Components/Molecules/KiSidebar',
  component: 'ki-sidebar',
  argTypes: {
    title: { 
      control: 'text',
      description: 'Optional sidebar title'
    },
    position: { 
      control: { 
        type: 'select', 
        options: ['left', 'right'] 
      },
      description: 'Sidebar position'
    },
    open: { 
      control: 'boolean',
      description: 'Initial visibility of sidebar'
    }
  }
} as Meta;

const Template: Story = ({ title, position, open }) => html`
  <ki-sidebar 
    title="${title}" 
    position="${position}"
    ?open="${open}"
  >
    <ul>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
      <li>Menu Item 4</li>
    </ul>
  </ki-sidebar>
`;

export const Default = Template.bind({});
Default.args = {
  title: 'Sidebar Title',
  position: 'left',
  open: true
};

export const RightSidebar = Template.bind({});
RightSidebar.args = {
  title: 'Right Sidebar',
  position: 'right',
  open: true
};

export const ClosedSidebar = Template.bind({});
ClosedSidebar.args = {
  title: 'Closed Sidebar',
  position: 'left',
  open: false
};
