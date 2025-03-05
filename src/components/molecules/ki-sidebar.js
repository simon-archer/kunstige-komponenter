class KiSidebar extends HTMLElement {
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
            width: 250px;
            background-color: #ffffff;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            border-radius: var(--ki-border-radius-outer, 8px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          }
          .sidebar-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #343a40;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(0, 0, 0, 0.1);
          }
          .sidebar-menu {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .sidebar-item {
            padding: 12px 15px;
            margin-bottom: 10px;
            border-radius: var(--ki-border-radius-inner, 4px);
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            background-color: #f8f9fa;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          }
          .sidebar-item:hover {
            color: var(--ki-primary, #000000);
            background-color: #f5f5f5;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
          }
        </style>
        <div class="sidebar-container">
          <div class="sidebar-title">Navigation</div>
          <ul class="sidebar-menu">
            <li class="sidebar-item">Home</li>
            <li class="sidebar-item">Components</li>
            <li class="sidebar-item">Documentation</li>
            <li class="sidebar-item">About</li>
          </ul>
        </div>
      `;
    }
  }
}

customElements.define('ki-sidebar', KiSidebar);