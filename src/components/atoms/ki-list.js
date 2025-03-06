class KiList extends HTMLElement {
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
          }
          .list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          ::slotted(li) {
            padding: 8px 12px;
            margin-bottom: 6px;
            border-radius: 4px;
            transition: background-color 0.2s;
            cursor: pointer;
          }
          ::slotted(li:hover) {
            background-color: #f5f5f5;
          }
        </style>
        <ul class="list">
          <slot></slot>
        </ul>
      `;
    }
  }
}

customElements.define('ki-list', KiList);