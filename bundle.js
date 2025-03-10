// bundle.js - Kunstige Komponenter
// Direct imports of all components with embedded SVG icons

// Import all components directly - no dynamic loading needed
import './src/components/atoms/ki-icon.js';
import './src/components/atoms/ki-button.js';
import './src/components/atoms/ki-control-button.js';
import './src/components/atoms/ki-card.js';
import './src/components/atoms/ki-list.js';
import './src/components/molecules/ki-message-field.js';
import './src/components/molecules/ki-sidebar.js';
import './src/components/organisms/ki-header.js';
import './src/components/organisms/ki-footer.js';

// Create a namespace for utilities and configuration 
const KI_COMPONENTS = (function() {
  // Define SVG icon map for offline use
  const SVG_ICONS = {
    'Arrow-Up': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.156 3.12081C11.6276 2.66806 12.3724 2.66806 12.844 3.12081L20.344 10.3208C20.8296 10.787 20.8453 11.5585 20.3792 12.044C19.913 12.5296 19.1415 12.5453 18.656 12.0792L13.2188 6.85945V19.5C13.2188 20.1731 12.6731 20.7188 12 20.7188C11.3269 20.7188 10.7812 20.1731 10.7812 19.5V6.85945L5.34402 12.0792C4.85846 12.5453 4.08695 12.5296 3.62081 12.044C3.15467 11.5585 3.17041 10.787 3.65598 10.3208L11.156 3.12081Z" fill="currentColor"/>
    </svg>`,

    'File': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C9.23857 21 7 18.7614 7 16L7 7.5C7 5.84315 8.34314 4.5 10 4.5C11.6569 4.5 13 5.84314 13 7.5L13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 8C11 7.44771 10.5523 7 10 7C9.44772 7 9 7.44771 9 8L9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16L15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23857 2.5 5 4.73858 5 7.5L5 16C5 19.866 8.13401 23 12 23C15.866 23 19 19.866 19 16L19 13.5C19 12.9477 18.5523 12.5 18 12.5C17.4477 12.5 17 12.9477 17 13.5L17 16C17 18.7614 14.7614 21 12 21Z" fill="currentColor"/>
    </svg>`,

    'Loading': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 11.1716 19.1716 10.5 20 10.5C20.8284 10.5 21.5 11.1716 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4C13.5 4.82843 12.8284 5.5 12 5.5Z" fill="currentColor"/>
    </svg>`,

    'Stop': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" fill="currentColor"/>
    </svg>`,

    'Globe': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3757 21.8688C10.9044 21.9551 11.4469 22 12 22C12.5662 22 13.1215 21.9529 13.6621 21.8625C17.9897 21.1385 21.3758 17.6351 21.9226 13.25C21.9737 12.8405 22 12.4233 22 12C22 11.5767 21.9737 11.1595 21.9226 10.75C21.372 6.33438 17.9425 2.81281 13.5717 2.1228C13.0597 2.04197 12.5347 2 12 2C11.454 2 10.9182 2.04376 10.396 2.12796C6.04057 2.83019 2.62663 6.34527 2.07737 10.75C2.0263 11.1595 2 11.5767 2 12C2 12.4233 2.0263 12.8405 2.07737 13.25C2.62578 17.6479 6.03 21.1589 10.3757 21.8688ZM4.6037 13.25C5.00907 15.6662 6.56974 17.6907 8.69829 18.736C7.93071 16.8719 7.55536 15.022 7.4595 13.25H4.6037ZM9.97182 13.25C10.1039 15.2656 10.6576 17.3907 11.8513 19.4986C11.9007 19.4995 11.9503 19.5 12 19.5C12.0618 19.5 12.1235 19.4992 12.185 19.4978C13.0547 17.9289 13.8412 15.7717 14.0221 13.25H9.97182ZM13.995 10.75H10.0151C10.2555 8.30672 11.04 6.13371 11.9043 4.5006C11.9361 4.5002 11.9681 4.5 12 4.5C12.0202 4.5 12.0403 4.50008 12.0604 4.50024C13.2313 6.67948 13.8117 8.79034 13.995 10.75ZM16.5296 13.25C16.3997 15.3007 15.9225 17.1597 15.2956 18.739C17.4273 17.6946 18.9905 15.6686 19.3963 13.25H16.5296ZM19.3963 10.75H16.51C16.3702 8.98516 15.9539 7.11812 15.1576 5.19513C17.3597 6.21865 18.9818 8.27956 19.3963 10.75ZM8.84172 5.19543C8.19694 6.80887 7.68257 8.6988 7.50297 10.75H4.6037C5.01812 8.27981 6.64002 6.21906 8.84172 5.19543Z" fill="currentColor"/>
    </svg>`,

    'Search': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5ZM1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10C18.5 11.8054 17.9371 13.4794 16.9773 14.856L22 19.8787C22.5858 20.4645 22.5858 21.4142 22 22C21.4142 22.5858 20.4645 22.5858 19.8787 22L14.856 16.9773C13.4794 17.9371 11.8054 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10Z" fill="currentColor"/>
    </svg>`,

    'Placeholder': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C11.9121 21.5 11.8246 21.4988 11.7373 21.4964L4.48874 21.4556C3.38858 21.4494 2.5 20.5558 2.5 19.4556V4.50146C2.5 3.39689 3.39543 2.50146 4.5 2.50146H11.8318C11.8877 2.50049 11.9438 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12ZM12.2479 5.86821L12 5.1795L11.4147 6.50971C10.3595 8.90786 8.39722 10.7903 5.95734 11.7451L5.09828 12.0812L5.95733 12.4174C8.39722 13.3721 10.3595 15.2546 11.4147 17.6527L12 18.9829L12.2479 18.2942C13.248 15.5163 15.435 13.3292 18.213 12.3291L18.9017 12.0812L18.213 11.8333C15.435 10.8332 13.248 8.64615 12.2479 5.86821Z" fill="currentColor"/>
    </svg>`
  };

  // Override fetch to use our embedded SVG icons
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    // Check if the request is for an SVG icon
    if (typeof url === 'string' && 
        (url.includes('/src/assets/icons/') || url.includes('./src/assets/icons/')) && 
        url.endsWith('.svg')) {
      // Extract icon name from the URL
      const iconNameMatch = url.match(/\/([^\/]+)\.svg$/);
      if (iconNameMatch && iconNameMatch[1]) {
        const iconName = iconNameMatch[1];
        // Check if we have this icon in our embedded collection
        if (SVG_ICONS[iconName]) {
          console.log(`Using embedded SVG icon: ${iconName}`);
          // Return a mock response with the embedded SVG
          return Promise.resolve({
            ok: true,
            text: () => Promise.resolve(SVG_ICONS[iconName])
          });
        }
      }
    }
    
    // For all other requests, use the original fetch
    return originalFetch.apply(this, arguments);
  };

  // Component list (for reference)
  const componentsList = [
    'ki-icon', 
    'ki-button', 
    'ki-control-button', 
    'ki-card', 
    'ki-list',
    'ki-message-field', 
    'ki-sidebar', 
    'ki-header', 
    'ki-footer'
  ];
  
  // Return public API
  return {
    // Bundle info
    name: 'kunstige-komponenter',
    version: '0.5.0',
    description: 'A simple web component library with direct imports',
    svgIcons: Object.keys(SVG_ICONS),
    
    // Ready state handling with component list
    ready: function(callback) {
      if (callback && typeof callback === 'function') {
        // Components are already loaded via direct imports
        callback({
          isReady: true,
          components: componentsList
        });
      }
    },
    
    // Get embedded SVG
    getSvgIcon: (name) => SVG_ICONS[name] || SVG_ICONS['Placeholder'],
    
    // Get the list of components
    getComponents: () => Promise.resolve(componentsList)
  };
})();

// Export both as default and as named export for different import styles
export default KI_COMPONENTS;
export const KiComponents = KI_COMPONENTS;