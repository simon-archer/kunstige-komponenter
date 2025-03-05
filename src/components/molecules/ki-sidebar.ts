import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../atoms/ki-button';

/**
 * KI Sidebar - A flexible sidebar component for the design system
 * @element ki-sidebar
 */
@customElement('ki-sidebar')
export class KiSidebar extends LitElement {
  /**
   * Optional title for the sidebar
   */
  @property({ type: String })
  title = '';

  /**
   * Initial visibility state of the sidebar
   */
  @property({ type: Boolean })
  open = true;

  /**
   * Position of the sidebar
   */
  @property({ type: String })
  position: 'left' | 'right' = 'left';

  /**
   * Width of the sidebar
   */
  @property({ type: String })
  width = '300px';

  /**
   * Internal state to track sidebar visibility
   */
  @state()
  private _isOpen = true;

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      transition: transform 0.3s ease-in-out;
      background-color: var(--color-background, #ffffff);
      box-shadow: -2px 0 5px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: var(--sidebar-width, 300px);
      padding: 1rem;
      box-sizing: border-box;
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .sidebar-title {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .sidebar-content {
      flex-grow: 1;
      overflow-y: auto;
    }

    :host([position='left']) {
      left: 0;
      transform: translateX(var(--sidebar-transform, 0));
    }

    :host([position='right']) {
      right: 0;
      transform: translateX(var(--sidebar-transform, 0));
    }

    :host([open='false']) {
      --sidebar-transform: -100%;
    }
  `;

  constructor() {
    super();
    this._isOpen = this.open;
  }

  render() {
    return html`
      <div class="sidebar">
        <div class="sidebar-header">
          ${this.title ? html`<div class="sidebar-title">${this.title}</div>` : ''}
          <ki-button 
            variant="tertiary" 
            size="small" 
            @click="${this.toggleSidebar}"
          >
            ${this._isOpen ? 'Hide' : 'Show'}
          </ki-button>
        </div>
        <div class="sidebar-content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  /**
   * Toggle sidebar visibility
   */
  toggleSidebar() {
    this._isOpen = !this._isOpen;
    this.open = this._isOpen;
    
    this.dispatchEvent(new CustomEvent('sidebar-toggle', {
      detail: { open: this._isOpen },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ki-sidebar': KiSidebar;
  }
}
