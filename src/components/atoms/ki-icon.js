class KiIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'Placeholder';
    const size = this.getAttribute('size') || 'medium';
    const color = this.getAttribute('color') || 'currentColor';
    
    if (this.shadowRoot) {
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
          }
          .icon-container svg {
            transition: all 0.3s ease;
          }
          .icon-container svg path {
            fill: ${color};
          }
          .small {
            width: 16px;
            height: 16px;
          }
          .medium {
            width: 24px;
            height: 24px;
          }
          .large {
            width: 32px;
            height: 32px;
          }
          .custom {
            width: var(--ki-icon-size, 24px);
            height: var(--ki-icon-size, 24px);
          }
          
          /* Adding a subtle animation for loading icon */
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .loading svg {
            animation: spin 1.5s linear infinite;
          }
        </style>
        <div class="icon-container ${size} ${name === 'Loading' ? 'loading' : ''}">
          <!-- SVG content will be loaded here -->
        </div>
      `;

      this.loadSvg(name).catch(() => this.renderFallbackIcon());
    }
  }

  async loadSvg(name) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`/src/assets/icons/${name}.svg`);
        if (!response.ok) {
          throw new Error(`Failed to load icon: ${name}`);
        }
        
        const svgText = await response.text();
        const container = this.shadowRoot?.querySelector('.icon-container');
        
        if (container) {
          container.innerHTML = svgText;
          
          // Make sure the SVG adapts to container size
          const svg = container.querySelector('svg');
          if (svg) {
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.style.display = 'block';
          }
          resolve();
        } else {
          reject(new Error('Container not found'));
        }
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  renderFallbackIcon() {
    const container = this.shadowRoot.querySelector('.icon-container');
    if (container) {
      // Try to load the placeholder icon first
      this.loadSvg('Placeholder')
        .catch(() => {
          // If even the placeholder fails, use a basic square
          container.innerHTML = `
            <svg viewBox="0 0 24 24" width="100%" height="100%">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          `;
        });
    }
  }

  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define('ki-icon', KiIcon);