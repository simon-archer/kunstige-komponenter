import { html, TemplateResult } from 'lit';
import '../src/kunstige-komponenter.js';

export default {
  title: 'KunstigeKomponenter',
  component: 'kunstige-komponenter',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <kunstige-komponenter style="--kunstige-komponenter-background-color: ${backgroundColor}" .header=${header}></kunstige-komponenter>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
