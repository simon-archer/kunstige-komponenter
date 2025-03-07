class KiControlButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._state = 'send'; // Initial state: 'send', 'loading', or 'stop'
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if (['send', 'loading', 'stop'].includes(newState) && newState !== this._state) {
      this._state = newState;
      this.render();
    }
  }

  addEventListeners() {
    if (this.shadowRoot) {
      const button = this.shadowRoot.querySelector('button');
      if (button) {
        button.addEventListener('click', this.handleClick.bind(this));
      }
    }
  }

  handleClick(event) {
    // Cycle through states when clicked
    if (!this.hasAttribute('disabled')) {
      const stateMap = {
        'send': 'loading',
        'loading': 'stop',
        'stop': 'send'
      };
      
      this.state = stateMap[this.state];
      
      this.dispatchEvent(new CustomEvent('ki-control-state-change', {
        bubbles: true,
        composed: true,
        detail: {
          state: this.state,
          event
        }
      }));
    }
  }

  render() {
    if (!this.shadowRoot) return;

    const disabled = this.hasAttribute('disabled');
    const size = this.getAttribute('size') || 'medium';
    
    // Map states to icons
    const stateIcons = {
      'send': 'Arrow-Up',
      'loading': 'Loading',
      'stop': 'Stop'
    };
    
    // Determine current icon
    const currentIcon = stateIcons[this.state];

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          width: ${size === 'small' ? '30px' : size === 'large' ? '42px' : '32px'};
          height: ${size === 'small' ? '30px' : size === 'large' ? '42px' : '32px'};
          border: none;
          padding: 2px;
          border-radius: var(--ki-border-radius, 9999px);
          cursor: pointer;
          background-color: var(--ki-primary, #000000);
          color: white;
          transition: box-shadow 0.3s ease;
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
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* All icons are white */
        ki-icon {
          color: white;
        }
      </style>
      
      <button 
        class="${this.state}-state ${size}"
        ${disabled ? 'disabled' : ''}
        aria-label="${this.state} button"
      >
        <div class="button-icon">
          <ki-icon name="${currentIcon}" size="${size}"></ki-icon>
        </div>
      </button>
    `;
    
    this.buttonElement = this.shadowRoot.querySelector('button');
    
    if (this.buttonElement) {
      this.buttonElement.addEventListener('click', this.handleClick.bind(this));
    }
  }

  static get observedAttributes() {
    return ['disabled', 'size'];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define('ki-control-button', KiControlButton);