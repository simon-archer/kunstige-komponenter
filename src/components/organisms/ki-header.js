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
            padding: 12px 20px;
            box-sizing: border-box;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            z-index: 10;
          }
          .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
          }
          .logo {
            font-size: 22px;
            font-weight: bold;
            text-decoration: none;
            color: white;
          }
          .nav-links {
            display: flex;
            gap: 24px;
          }
          .nav-link {
            cursor: pointer;
            text-decoration: none;
            color: white;
            opacity: 0.9;
            padding: 8px 0;
            position: relative;
          }
          .nav-link:hover {
            opacity: 1;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: white;
            transition: width 0.3s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          ki-icon {
            width: 16px;
            height: 16px;
          }
        </style>
        <div class="header-container">
          <a href="/" class="logo">Kunstige Komponenter</a>
          <nav class="nav-links">
            <a href="/" class="nav-link">Home</a>
            <a href="https://github.com/kunstige-komponenter" class="nav-link" target="_blank">GitHub</a>
          </nav>
        </div>
      `;
    }
  }
}

customElements.define('ki-header', KiHeader);