class KiButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const type = this.getAttribute('type') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const iconStart = this.getAttribute('icon-start');
    const iconEnd = this.getAttribute('icon-end');
    const iconOnly = this.getAttribute('icon-only');

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;

          }
          button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 15px;
            border: none;
            border-radius: var(--ki-border-radius, 9999px);
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
            position: relative;
          }
          button:hover:not(:disabled) {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
          }
          button:active:not(:disabled) {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          }
          button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 1), 0 0 0 6px rgba(0, 0, 255, 1);
          }
          button.primary {
            background-color: var(--ki-primary, #000000);
            color: white;
          }
          button.primary:hover:not(:disabled) {
            background-color: #333333;
          }
          button.primary:active:not(:disabled) {
            background-color: #444444;
          }
          button.secondary {
            background-color: var(--ki-secondary, #6c757d);
            color: white;
          }
          button.secondary:hover:not(:disabled) {
            background-color: #5a6268;
          }
          button.secondary:active:not(:disabled) {
            background-color: #4e555b;
          }
          button.tertiary {
            background-color: #ffffff;
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
            border: 1px solid #e0e6ed;
            color: var(--ki-primary, #000000);
          }
          button.tertiary:hover:not(:disabled) {
            background-color: #f8fafc;
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
            border-color: #c9d4df;
          }
          button.tertiary:active:not(:disabled) {
            background-color: #f0f4f8;
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
          }
          button.small {
            padding: 5px 10px;
            font-size: 12px;
          }
          button.large {
            padding: 15px 30px;
            font-size: 20px;
          }
          button.icon-only {
            padding: ${size === 'small' ? '6px' : size === 'large' ? '16px' : '10px'};
            aspect-ratio: 1 / 1;
          }
          button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .icon-start {
            margin-right: 8px;
            display: inline-flex;
          }
          .icon-end {
            margin-left: 8px;
            display: inline-flex;
          }
          ki-icon {
            vertical-align: middle;
          }
        </style>
        <button 
          class="${type} ${size} ${iconOnly ? 'icon-only' : ''}"
          ${disabled ? 'disabled' : ''}
        >
          ${iconStart ? `<span class="icon-start"><ki-icon name="${iconStart}" size="${size}"></ki-icon></span>` : ''}
          ${!iconOnly ? '<slot></slot>' : ''}
          ${iconOnly ? `<ki-icon name="${iconOnly}" size="${size}"></ki-icon>` : ''}
          ${iconEnd ? `<span class="icon-end"><ki-icon name="${iconEnd}" size="${size}"></ki-icon></span>` : ''}
        </button>
      `;

      this.buttonElement = this.shadowRoot.querySelector('button');
      
      if (this.buttonElement) {
        this.buttonElement.addEventListener('click', this.handleClick.bind(this));
      }
    }
  }

  handleClick(event) {
    if (!this.hasAttribute('disabled')) {
      this.dispatchEvent(new CustomEvent('ki-button-click', {
        bubbles: true,
        composed: true,
        detail: {
          type: this.getAttribute('type') || 'primary',
          size: this.getAttribute('size') || 'medium',
          event
        }
      }));
    }
  }

  static get observedAttributes() {
    return ['type', 'size', 'disabled'];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define('ki-button', KiButton);

class KiToggleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.boundHandleClick = this.handleClick.bind(this);
  }

  static get observedAttributes() {
    return ['toggled', 'size', 'disabled', 'icon-start', 'icon-end'];
  }
  
  get toggled() {
    return this.hasAttribute('toggled');
  }
  
  set toggled(value) {
    if (value) {
      this.setAttribute('toggled', '');
    } else {
      this.removeAttribute('toggled');
    }
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
      this.addEventListeners(); // Re-add event listeners after render
    }
  }
  
  addEventListeners() {
    // Remove old event listener first if it exists
    if (this.buttonElement) {
      this.buttonElement.removeEventListener('click', this.boundHandleClick);
    }
    
    // Create bound method reference for proper removal later
    if (!this.boundHandleClick) {
      this.boundHandleClick = this.handleClick.bind(this);
    }
    
    // Get button and add event listener
    this.buttonElement = this.shadowRoot.querySelector('button');
    if (this.buttonElement) {
      this.buttonElement.addEventListener('click', this.boundHandleClick);
    }
  }
  
  handleClick(event) {
    if (!this.hasAttribute('disabled')) {
      this.toggled = !this.toggled;
      
      this.dispatchEvent(new CustomEvent('ki-toggle', {
        bubbles: true,
        composed: true,
        detail: {
          toggled: this.toggled,
          event
        }
      }));
    }
  }

  render() {
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const iconStart = this.getAttribute('icon-start');
    const iconEnd = this.getAttribute('icon-end');
    const type = this.toggled ? 'primary' : 'tertiary';

    if (this.shadowRoot) {
      // Save old button to avoid complete DOM replacement
      const oldButton = this.shadowRoot.querySelector('button');
      const wasToggled = oldButton ? oldButton.classList.contains('primary') : false;
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
          
          button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 15px;
            border: 1px solid transparent;
            border-radius: var(--ki-border-radius, 9999px);
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s ease;
            position: relative;
          }
          
          button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 1), 0 0 0 6px rgba(0, 0, 255, 1);
          }
          
          button.primary {
            background-color: var(--ki-primary, #000000);
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
            border: 1px solid var(--ki-primary, #000000);
          }
          
          button.primary:hover:not(:disabled) {
            background-color: #333333;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
            border-color: #333333;
          }
          
          button.primary:active:not(:disabled) {
            background-color: #444444;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
            border-color: #444444;
          }
          
          button.tertiary {
            background-color: #ffffff;
            border: 1px solid #e0e6ed;
            color: var(--ki-primary, #000000);
            box-shadow: none;
          }
          
          button.tertiary:hover:not(:disabled) {
            background-color: #f8fafc;
            border-color: #c9d4df;
          }
          
          button.tertiary:active:not(:disabled) {
            background-color: #f0f4f8;
          }
          
          button.small {
            padding: 5px 10px;
            font-size: 12px;
          }
          
          button.large {
            padding: 15px 30px;
            font-size: 20px;
          }
          
          button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .icon-start {
            margin-right: 8px;
            display: inline-flex;
          }
          
          .icon-end {
            margin-left: 8px;
            display: inline-flex;
          }
          
          ki-icon {
            vertical-align: middle;
          }
        </style>
        
        <button 
          class="${type} ${size}"
          ?disabled="${disabled}"
          aria-pressed="${this.toggled}"
        >
          ${iconStart ? `<span class="icon-start"><ki-icon name="${iconStart}" size="${size}"></ki-icon></span>` : ''}
          <slot></slot>
          ${iconEnd ? `<span class="icon-end"><ki-icon name="${iconEnd}" size="${size}"></ki-icon></span>` : ''}
        </button>
      `;
    }
  }
}

customElements.define('ki-toggle-button', KiToggleButton);