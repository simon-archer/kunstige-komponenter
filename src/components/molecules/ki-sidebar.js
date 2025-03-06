class KiSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.components = [
      { name: 'Button', id: 'ki-button', desc: 'Interactive buttons' },
      { name: 'Card', id: 'ki-card', desc: 'Content containers' },
      { name: 'Control Button', id: 'ki-control-button', desc: 'State-based buttons' },
      { name: 'Icon', id: 'ki-icon', desc: 'SVG icon system' },
      { name: 'Input', id: 'ki-input', desc: 'Text input fields' },
      { name: 'List', id: 'ki-list', desc: 'List elements' },
      { name: 'Message Field', id: 'ki-input-area', desc: 'Message input with send button' },
      { name: 'Sidebar', id: 'ki-sidebar', desc: 'Navigation panel' },
      { name: 'Footer', id: 'ki-footer', desc: 'Page footer' },
      { name: 'Header', id: 'ki-header', desc: 'Page header' }
    ];
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const cards = this.shadowRoot.querySelectorAll('.component-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const targetId = card.dataset.target;
        if (targetId) {
          const event = new CustomEvent('navigation', {
            detail: { target: targetId },
            bubbles: true,
            composed: true
          });
          this.dispatchEvent(event);
        }
      });
    });
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 240px;
            background-color: #ffffff;
            height: 100%;
            padding: 16px;
            box-sizing: border-box;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            overflow-y: auto;
          }
          .sidebar-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 16px;
            color: #333;
            padding-bottom: 8px;
            border-bottom: 1px solid #eee;
          }
          .components-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .component-card {
            cursor: pointer;
            transition: transform 0.2s ease;
          }
          .component-card:hover {
            transform: translateY(-2px);
          }
          .component-name {
            font-weight: 500;
            margin: 0 0 4px 0;
            color: var(--ki-primary, #000000);
            font-size: 14px;
          }
          .component-desc {
            font-size: 12px;
            color: #666;
            margin: 0;
            line-height: 1.4;
          }
        </style>
        <div class="sidebar-container">
          <div class="sidebar-title">Components</div>
          <div class="components-container">
            ${this.components.map(comp => `
              <ki-card variant="default" elevation="low" class="component-card" data-target="${comp.id}">
                <h3 class="component-name">${comp.name}</h3>
                <p class="component-desc">${comp.desc}</p>
              </ki-card>
            `).join('')}
          </div>
        </div>
      `;
    }
  }
}

customElements.define('ki-sidebar', KiSidebar);
