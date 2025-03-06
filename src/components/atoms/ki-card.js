class KiCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['variant', 'elevation'];
  }

  get variant() {
    return this.getAttribute('variant') || 'default';
  }

  get elevation() {
    return this.getAttribute('elevation') || 'medium';
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      // Map variant to border-radius values
      const radiusMap = {
        'sharp': 'var(--ki-border-radius-none, 0px)',
        'default': 'var(--ki-border-radius-medium, 16px)',
        'rounded': 'var(--ki-border-radius-large, 32px)',
        'pill': 'var(--ki-border-radius-pill, 9999px)'
      };

      // Map elevation to shadow values
      const shadowMap = {
        'none': '0 0 0 rgba(0, 0, 0, 0)',
        'low': '0 0 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 3px 8px rgba(0, 0, 0, 0.08)',
        'high': '0 5px 15px rgba(0, 0, 0, 0.1)'
      };

      // Select the border radius based on the variant
      const borderRadius = radiusMap[this.variant] || radiusMap.default;
      
      // Select the shadow based on the elevation
      const boxShadow = shadowMap[this.elevation] || shadowMap.medium;

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          
          .card {
            background-color: white;
            border-radius: ${borderRadius};
            box-shadow: ${boxShadow};
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.05);
            padding: var(--ki-card-padding, 16px);
          }
          
          .card:hover {
            box-shadow: ${this.elevation !== 'none' ? '0 0 5px rgba(0, 0, 0, 0.12)' : boxShadow};
            background-color: rgba(252, 252, 252, 1);
          }
        </style>
        <div class="card">
          <slot></slot>
        </div>
      `;
    }
  }
}

customElements.define('ki-card', KiCard);