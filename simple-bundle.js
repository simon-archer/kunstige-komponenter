// simple-bundle.js
// A simple bundle that imports all components needed for ki-message-field in the correct order

// Import components in dependency order
import 'https://cdn.jsdelivr.net/gh/simon-archer/kunstige-komponenter@master/src/components/atoms/ki-icon.js';
import 'https://cdn.jsdelivr.net/gh/simon-archer/kunstige-komponenter@master/src/components/atoms/ki-button.js';
import 'https://cdn.jsdelivr.net/gh/simon-archer/kunstige-komponenter@master/src/components/atoms/ki-control-button.js';
import 'https://cdn.jsdelivr.net/gh/simon-archer/kunstige-komponenter@master/src/components/molecules/ki-message-field.js';

// Export a simple object for version info
export default {
  name: 'kunstige-komponenter',
  version: '1.0.0',
  components: ['ki-icon', 'ki-button', 'ki-control-button', 'ki-message-field'],
  description: 'A simple web component library for chat interfaces'
};