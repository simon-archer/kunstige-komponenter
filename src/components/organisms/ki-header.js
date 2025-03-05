class KiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            background-color: var(--ki-primary, #000000);
            color: white;
            padding: 16px 24px;
            box-sizing: border-box;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
            position: relative;
            z-index: 10;
            border-radius: 0 0 var(--ki-border-radius-outer, 8px) var(--ki-border-radius-outer, 8px);
          }
          .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            position: relative;
          }
          .logo::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 40px;
            height: 3px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: var(--ki-border-radius-inner, 4px);
          }
          .nav-links {
            display: flex;
            gap: 24px;
          }
          .nav-link {
            cursor: pointer;
            position: relative;
            padding: 5px 0;
            transition: all 0.3s ease;
            opacity: 0.85;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .nav-link:hover {
            opacity: 1;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: white;
            transition: width 0.3s ease;
            border-radius: var(--ki-border-radius-inner, 4px);
          }
          .nav-link:hover::after {
            width: 100%;
          }
          ki-icon {
            width: 18px;
            height: 18px;
          }
        </style>
        <div class="header-container">
          <div class="logo">Kunstige Komponenter</div>
          <div class="nav-links">
            <div class="nav-link">
              <ki-icon name="check-circle"></ki-icon>
              Components
            </div>
            <div class="nav-link">
              <ki-icon name="info"></ki-icon>
              Documentation
            </div>
            <div class="nav-link">
              <ki-icon name="github"></ki-icon>
              Github
            </div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('ki-header', KiHeader);