// bundle.js
// A complete bundle with inline SVG icons and all components needed for ki-message-field

// Create a namespace to avoid global variable pollution
const KI_COMPONENTS = (function() {
  // Define SVG icon map
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

  // Define the components
  class KiIcon extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
      return ['name', 'size', 'color'];
    }
    
    attributeChangedCallback() {
      this.render();
    }
    
    connectedCallback() {
      this.render();
    }
    
    get name() {
      return this.getAttribute('name') || 'Placeholder';
    }
    
    get size() {
      return this.getAttribute('size') || 'medium';
    }
    
    get color() {
      return this.getAttribute('color') || 'currentColor';
    }
    
    render() {
      const sizeMap = {
        'small': '16px',
        'medium': '24px',
        'large': '32px'
      };
      
      const iconSize = sizeMap[this.size] || '24px';
      const iconName = this.name;
      const iconSvg = SVG_ICONS[iconName] || SVG_ICONS['Placeholder'];
      const isLoading = iconName === 'Loading';
      
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            line-height: 0;
          }
          .icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: ${iconSize};
            height: ${iconSize};
            color: ${this.color};
          }
          .icon-container svg {
            width: 100%;
            height: 100%;
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .loading svg {
            animation: spin 1.5s linear infinite;
          }
        </style>
        <div class="icon-container ${isLoading ? 'loading' : ''}">
          ${iconSvg}
        </div>
      `;
    }
  }

  class KiButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
      const button = this.shadowRoot.querySelector('button');
      if (button) {
        button.addEventListener('click', this.handleClick.bind(this));
      }
    }

    handleClick(event) {
      if (!this.hasAttribute('disabled')) {
        this.dispatchEvent(new CustomEvent('ki-button-click', {
          bubbles: true,
          composed: true,
          detail: { event }
        }));
      }
    }

    static get observedAttributes() {
      return ['variant', 'size', 'disabled', 'icon-start', 'icon-end', 'icon-only'];
    }

    attributeChangedCallback() {
      this.render();
    }

    render() {
      const variant = this.getAttribute('variant') || 'primary';
      const size = this.getAttribute('size') || 'medium';
      const disabled = this.hasAttribute('disabled');
      const iconStart = this.getAttribute('icon-start');
      const iconEnd = this.getAttribute('icon-end');
      const iconOnly = this.getAttribute('icon-only');
      
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
    }
  }

  class KiControlButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._state = 'send'; // Initial state: 'send', 'loading', or 'stop'
      this.boundHandleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
      this.render();
      this.addEventListeners();
    }

    static get observedAttributes() {
      return ['state', 'size', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
        this.addEventListeners();
      }
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
      if (this.buttonElement) {
        this.buttonElement.removeEventListener('click', this.boundHandleClick);
      }
      
      this.buttonElement = this.shadowRoot.querySelector('button');
      if (this.buttonElement) {
        this.buttonElement.addEventListener('click', this.boundHandleClick);
      }
    }

    handleClick(event) {
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
      const size = this.getAttribute('size') || 'medium';
      const disabled = this.hasAttribute('disabled');
      
      // Map states to icons
      const stateIcons = {
        'send': 'Arrow-Up',
        'loading': 'Loading',
        'stop': 'Stop'
      };
      
      // Determine current icon
      const currentIcon = stateIcons[this.state];

      if (this.shadowRoot) {
        // Save old button to avoid complete DOM replacement
        const oldButton = this.shadowRoot.querySelector('button');
        const wasToggled = oldButton ? oldButton.classList.contains('primary') : false;
        
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-block;
              margin: 2px;
            }
            
            button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              aspect-ratio: 1 / 1;
              width: ${size === 'small' ? '28px' : size === 'large' ? '42px' : '32px'};
              height: ${size === 'small' ? '28px' : size === 'large' ? '42px' : '32px'};
              padding: 0;
              border: none;
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
      }
    }
  }

  class KiMessageField extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.value = '';
      this.state = 'send';
      this.attachments = [];
    }

    static get observedAttributes() {
      return ['placeholder'];
    }

    get placeholder() {
      return this.getAttribute('placeholder') || 'Type a message...';
    }

    connectedCallback() {
      this.render();
      this.addEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }

    addEventListeners() {
      const textarea = this.shadowRoot.querySelector('textarea');
      const button = this.shadowRoot.querySelector('.right-tools ki-control-button');
      const attachButton = this.shadowRoot.querySelector('.attachment-button');
      
      // Add click listener to textarea container to help with scrolling
      const inputArea = this.shadowRoot.querySelector('.input-area');
      if (inputArea) {
        inputArea.addEventListener('click', () => {
          if (textarea) textarea.focus();
        });
      }

      if (textarea) {
        textarea.addEventListener('input', (e) => {
          this.value = e.target.value;
          this.adjustTextareaHeight(textarea);
        });
        
        textarea.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (this.state === 'send') {
              this.handleSend();
            }
          }
        });
        
        // Initial height adjustment
        this.adjustTextareaHeight(textarea);
      }

      if (button) {
        button.addEventListener('click', () => {
          if (this.state === 'send') {
            this.handleSend();
          } else if (this.state === 'loading') {
            // Do nothing while loading
          } else if (this.state === 'stop') {
            this.handleStop();
          }
        });
      }

      if (attachButton) {
        attachButton.addEventListener('click', this.handleAttachmentClick.bind(this));
        // Create hidden file input
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.multiple = true;
        this.fileInput.style.display = 'none';
        this.fileInput.accept = '.pdf,.txt,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png';
        this.shadowRoot.appendChild(this.fileInput);
        
        this.fileInput.addEventListener('change', this.handleFileSelect.bind(this));
      }
    }
    
    adjustTextareaHeight(textarea) {
      // Store current scroll position
      const scrollTop = textarea.scrollTop;
      
      // Reset height to auto to measure the scrollHeight properly
      textarea.style.height = 'auto';
      
      // Get content height
      const contentHeight = textarea.scrollHeight;
      
      // Calculate new height within limits
      const maxHeight = 150;
      const minHeight = 36;
      const newHeight = Math.max(minHeight, Math.min(contentHeight, maxHeight));
      
      // Apply the new height
      textarea.style.height = `${newHeight}px`;
      
      // Restore scroll position
      textarea.scrollTop = scrollTop;
      
      // Add scrolling class if needed for border radius change
      const container = this.shadowRoot.querySelector('.message-container');
      if (container) {
        if (contentHeight > maxHeight) {
          container.classList.add('scrolling');
          
          // Add additional padding for scrollbar
          textarea.style.paddingRight = '18px'; 
        } else {
          container.classList.remove('scrolling');
          textarea.style.paddingRight = '14px';
        }
      }
    }
    
    handleAttachmentClick() {
      // Trigger file input click
      this.fileInput.click();
    }
    
    handleFileSelect(event) {
      const files = event.target.files;
      if (!files || files.length === 0) return;
      
      // Process the selected files
      Array.from(files).forEach(file => {
        this.attachments.push(file);
      });
      
      // Update attachments display
      this.updateAttachmentsDisplay();
      
      // Clear the file input value so the same file can be selected again
      this.fileInput.value = '';
    }
    
    updateAttachmentsDisplay() {
      const container = this.shadowRoot.querySelector('.attachments-container');
      if (!container) return;
      
      // Clear previous attachments
      container.innerHTML = '';
      
      if (this.attachments.length > 0) {
        container.style.display = 'flex';
        
        // Create attachment chips
        this.attachments.forEach((file, index) => {
          const chip = document.createElement('div');
          chip.className = 'attachment-chip';
          chip.style.display = 'flex';
          chip.style.alignItems = 'center';
          chip.style.backgroundColor = '#f0f0f0';
          chip.style.borderRadius = '16px';
          chip.style.padding = '4px 8px';
          chip.style.margin = '2px';
          chip.style.fontSize = '12px';
          
          const name = document.createElement('span');
          name.textContent = file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name;
          name.style.marginRight = '4px';
          
          const removeBtn = document.createElement('span');
          removeBtn.textContent = '×';
          removeBtn.style.cursor = 'pointer';
          removeBtn.style.fontWeight = 'bold';
          
          removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.attachments.splice(index, 1);
            this.updateAttachmentsDisplay();
          });
          
          chip.appendChild(name);
          chip.appendChild(removeBtn);
          container.appendChild(chip);
        });
      } else {
        container.style.display = 'none';
      }
    }

    handleSend() {
      if (!this.value.trim() && this.attachments.length === 0) return;

      this.state = 'loading';
      this.updateButtonState();

      // Simulate sending message with attachments
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('message-sent', {
          bubbles: true,
          composed: true,
          detail: { 
            value: this.value,
            attachments: this.attachments 
          }
        }));
        
        // Reset to send state
        this.value = '';
        const textarea = this.shadowRoot.querySelector('textarea');
        if (textarea) {
          textarea.value = '';
          this.adjustTextareaHeight(textarea);
        }
        
        // Clear attachments
        this.attachments = [];
        this.updateAttachmentsDisplay();
        
        this.state = 'send';
        this.updateButtonState();
      }, 300);
    }

    handleStop() {
      this.state = 'send';
      this.updateButtonState();
      this.dispatchEvent(new CustomEvent('message-canceled', {
        bubbles: true,
        composed: true
      }));
    }

    updateButtonState() {
      const button = this.shadowRoot.querySelector('ki-control-button');
      if (button) {
        button.state = this.state;
      }
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              width: 100%;
              font-size: 14px;
            }
            
            .message-container {
              display: flex;
              flex-direction: column;
              position: relative;
              border-radius: 24px;
              border: 1px solid #ddd;
              background-color: #fff;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
              overflow: hidden;
              transition: border-radius 0.2s ease;
              max-width: 100%;
            }
            
            .message-container.scrolling {
              border-radius: 16px;
            }
            
            .input-area {
              display: flex;
              padding: 0;
            }
            
            textarea {
              width: 100%;
              min-height: 36px;
              max-height: 150px;
              padding: 12px 14px;
              font-size: 15px;
              border: none;
              background: none;
              color: #333;
              outline: none;
              line-height: 1.4;
              margin: 0;
              resize: none;
              overflow-y: scroll;
              overflow-x: hidden;
              box-sizing: border-box;
              font-family: inherit;
              transition: height 0.15s ease;
              scrollbar-width: thin;
              scrollbar-color: #ccc rgba(0,0,0,0.02);
            }
            
            textarea::placeholder {
              color: #999;
              opacity: 0.8;
            }
            
            textarea::-webkit-scrollbar {
              width: 8px;
            }
            
            textarea::-webkit-scrollbar-track {
              background: rgba(0,0,0,0.02);
            }
            
            textarea::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 8px;
              border: 2px solid transparent;
              background-clip: padding-box;
            }
            
            textarea::-webkit-scrollbar-thumb:hover {
              background-color: #aaa;
            }
            
            .toolbar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 6px 12px;
              border-top: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .left-tools {
              display: flex;
              align-items: center;
            }
            
            .right-tools {
              display: flex;
              align-items: center;
            }
            
            .attachment-button {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: none;
              border: none;
              cursor: pointer;
              color: #666;
              transition: background-color 0.2s;
            }
            
            .attachment-button:hover {
              background-color: rgba(0, 0, 0, 0.05);
              color: #333;
            }
            
            .attachments-container {
              display: flex;
              flex-wrap: wrap;
              margin-left: 8px;
            }
            
            ki-control-button {
              margin: 0;
              padding: 0;
            }
          </style>
          
          <div class="message-container">
            <div class="input-area">
              <textarea 
                placeholder="${this.placeholder}"
                rows="1"
              ></textarea>
            </div>
            <div class="toolbar">
              <div class="left-tools">
                <button class="attachment-button" type="button" title="Attach file">
                  <ki-icon name="File" size="medium"></ki-icon>
                </button>
                <div class="attachments-container"></div>
              </div>
              <div class="right-tools">
                <ki-control-button state="${this.state}" size="medium"></ki-control-button>
              </div>
            </div>
          </div>
        `;
      }
    }
  }

  // Store ready state
  let isReady = false;
  const readyCallbacks = [];

  // Function to register custom elements in specific order
  function registerComponents() {
    if (!customElements.get('ki-icon')) {
      customElements.define('ki-icon', KiIcon);
    }
    
    if (!customElements.get('ki-button')) {
      customElements.define('ki-button', KiButton);
    }
    
    if (!customElements.get('ki-control-button')) {
      customElements.define('ki-control-button', KiControlButton);
    }
    
    if (!customElements.get('ki-message-field')) {
      customElements.define('ki-message-field', KiMessageField);
    }
    
    // Set ready state
    isReady = true;
    
    // Execute any queued callbacks
    while (readyCallbacks.length > 0) {
      readyCallbacks.shift()();
    }
  }

  // Register components immediately
  registerComponents();

  // Public API
  return {
    // Bundle info
    name: 'kunstige-komponenter',
    version: '0.1.1',
    components: ['ki-icon', 'ki-button', 'ki-control-button', 'ki-message-field'],
    description: 'A completely self-contained web component library for chat interfaces',
    svgIcons: Object.keys(SVG_ICONS),
    
    // Ready state handling
    ready: function(callback) {
      if (isReady) {
        callback();
      } else {
        readyCallbacks.push(callback);
      }
    },
    
    // Force reregister if needed (not normally needed)
    reregister: registerComponents
  };
})();

// Export both as default and as named export for different import styles
export default KI_COMPONENTS;
export const KiComponents = KI_COMPONENTS;