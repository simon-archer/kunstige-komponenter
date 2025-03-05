class KiButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute('variant') || 'primary';
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
            margin: 4px;
          }
          button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px 16px;
            border: none;
            border-radius: var(--ki-border-radius, 4px);
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
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.08);
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
            border: 1px solid #e0e6ed;
            color: var(--ki-primary, #000000);
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
          class="${variant} ${size} ${iconOnly ? 'icon-only' : ''}"
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
          variant: this.getAttribute('variant') || 'primary',
          size: this.getAttribute('size') || 'medium',
          event
        }
      }));
    }
  }

  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define('ki-button', KiButton);