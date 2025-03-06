class KiInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['placeholder', 'value', 'disabled'];
  }

  get placeholder() {
    return this.getAttribute('placeholder') || '';
  }

  get value() {
    return this.getAttribute('value') || '';
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set value(val) {
    if (val) {
      this.setAttribute('value', val);
    } else {
      this.removeAttribute('value');
    }
    this.updateValue();
  }

  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
      if (name === 'value') {
        this.updateValue();
      }
    }
  }

  updateValue() {
    const textarea = this.shadowRoot.querySelector('textarea');
    if (textarea && textarea.value !== this.value) {
      textarea.value = this.value;
      this.adjustHeight(textarea);
    }
  }

  adjustHeight(textarea) {
    // Save the original height
    const originalHeight = textarea.style.height;
    const wasScrolling = textarea.classList.contains('scrolling');
    
    // Reset height temporarily to calculate proper scrollHeight
    textarea.style.height = 'auto';
    
    // Get the scroll height - this is how tall the content is
    const contentHeight = textarea.scrollHeight;
    
    // If content is less than max height, fit to content
    // Otherwise set to max height and let it scroll
    const maxHeight = 150;
    const minHeight = 36;
    
    // Make sure the height is at least the minimum height
    const newHeight = Math.max(minHeight, Math.min(contentHeight, maxHeight));
    textarea.style.height = `${newHeight}px`;
    
    // Add a scrolling class if we're at max height
    const isScrolling = contentHeight > maxHeight;
    if (isScrolling) {
      textarea.classList.add('scrolling');
    } else {
      textarea.classList.remove('scrolling');
    }
    
    // Dispatch an event if the height changed
    if (originalHeight !== textarea.style.height || wasScrolling !== isScrolling) {
      this.dispatchEvent(new CustomEvent('height-changed', {
        bubbles: true,
        composed: true,
        detail: { 
          height: newHeight,
          isScrolling: isScrolling
        }
      }));
    }
  }

  setupEvents() {
    const textarea = this.shadowRoot.querySelector('textarea');
    if (textarea) {
      // Initial height adjustment
      this.adjustHeight(textarea);
      
      textarea.addEventListener('input', (e) => {
        this.value = e.target.value;
        this.adjustHeight(textarea);
        this.dispatchEvent(new CustomEvent('input', {
          bubbles: true,
          composed: true,
          detail: { value: e.target.value }
        }));
      });

      textarea.addEventListener('focus', () => {
        this.classList.add('focused');
      });

      textarea.addEventListener('blur', () => {
        this.classList.remove('focused');
      });
      
      // Handle Enter key
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('enter-pressed', {
            bubbles: true,
            composed: true
          }));
        }
      });
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: var(--ki-font-family, sans-serif);
            height: var(--ki-input-height, auto);
          }
          
          .input-container {
            position: relative;
            width: 100%;
          }
          
          textarea {
            width: 100%;
            min-height: 36px;
            max-height: 150px;
            padding: 10px 12px;
            font-size: 15px;
            border: none;
            background: none;
            color: #333;
            outline: none;
            line-height: 1.4;
            margin: 0;
            resize: none;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
            font-family: inherit;
            scrollbar-width: thin;
            scrollbar-color: #ddd transparent;
            transition: height 0.15s ease;
          }
          
          textarea.scrolling {
            padding-right: 14px; /* Add space for scrollbar */
          }
          
          textarea::-webkit-scrollbar {
            width: 6px;
          }
          
          textarea::-webkit-scrollbar-track {
            background: transparent;
          }
          
          textarea::-webkit-scrollbar-thumb {
            background-color: #ddd;
          }
          
          textarea::placeholder {
            color: #999;
            opacity: 0.8;
          }
          
          textarea:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        </style>
        
        <div class="input-container">
          <textarea
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
          >${this.value}</textarea>
        </div>
      `;
    }
  }
}

customElements.define('ki-input', KiInput);