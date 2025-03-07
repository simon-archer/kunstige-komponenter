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
      // Handler for both events
      const handleControlButtonChange = (e) => {
        let newState;
        
        if (e.type === 'ki-control-state-change') {
          newState = e.detail.state;
        } else if (e.type === 'click') {
          // Legacy click handling - manually cycle through states
          const stateMap = {
            'send': 'loading',
            'loading': 'stop',
            'stop': 'send'
          };
          newState = stateMap[this.state];
        }
        
        // The ki-control-button cycles: send -> loading -> stop -> send
        if (newState === 'loading' && this.state === 'send') {
          this.handleSend(); // Only trigger send when going from send to loading
        } else if (newState === 'send' && this.state === 'stop') {
          this.handleStop(); // Only trigger stop when going from stop to send
        }
        
        // Update our internal state to match the button
        this.state = newState;
      };
      
      // Listen for both custom event and regular click for backward compatibility
      button.addEventListener('ki-control-state-change', handleControlButtonChange);
      button.addEventListener('click', handleControlButtonChange);
    }

    if (attachButton) {
      // Use ki-button-click event for the ki-button component
      const boundHandleAttachmentClick = this.handleAttachmentClick.bind(this);
      attachButton.addEventListener('ki-button-click', boundHandleAttachmentClick);
      // For backwards compatibility, also listen to regular click events
      attachButton.addEventListener('click', boundHandleAttachmentClick);
      
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
          
          .input-area {
            display: flex;
            padding: 0;
          }
          
          textarea {
            width: 100%;
            min-height: 36px;
            max-height: 150px;
            padding: 12px 14px;
            font-size: 14px;
            border: none;
            background: none;
            color: #333;
            outline: none;
            line-height: 1.4;
            margin: 0;
            resize: none;
            overflow-y: scroll; /* Always show scrollbar to make it easier to scroll */
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
            border: 2px solid transparent;
            background-clip: padding-box;
          }
          
          textarea::-webkit-scrollbar-thumb:hover {
            background-color: #aaa;
          }
          
          .left-tools {
            display: flex;
            align-items: center;
          }
          
          .right-tools {
            display: flex;
            align-items: center;
          }
          
          .toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
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
              <ki-button class="attachment-button" type="tertiary" icon-only="File" size="small" title="Attach file"></ki-button>
              <div class="attachments-container"></div>
            </div>
            <div class="right-tools">
              <ki-control-button state="${this.state}" size="small"></ki-control-button>
            </div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('ki-message-field', KiMessageField);