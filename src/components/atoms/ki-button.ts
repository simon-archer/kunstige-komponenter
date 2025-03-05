import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * KI Button - A customizable button component for the design system
 * @element ki-button
 */
@customElement('ki-button')
export class KiButton extends LitElement {
  /**
   * Button variant: primary, secondary, or tertiary
   */
  @property({ type: String })
  variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Button size: small, medium, or large
   */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Disabled state of the button
   */
  @property({ type: Boolean })
  disabled = false;

  static styles = css`
    :host {
      display: inline-block;
      margin: 0.5rem;
    }

    button {
      font-family: var(--font-family-base, sans-serif);
      border: none;
      border-radius: var(--border-radius-base, 4px);
      cursor: pointer;
      transition: all 0.3s ease;
      outline: none;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    /* Variants */
    .primary {
      background-color: var(--color-primary, #007bff);
      color: white;
    }

    .secondary {
      background-color: var(--color-secondary, #6c757d);
      color: white;
    }

    .tertiary {
      background-color: transparent;
      color: var(--color-primary, #007bff);
      border: 1px solid var(--color-primary, #007bff);
    }

    /* Sizes */
    .small {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }

    .medium {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    .large {
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    }
  `;

  render() {
    return html`
      <button 
        class="${this.variant} ${this.size}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    
    this.dispatchEvent(new CustomEvent('ki-button-click', {
      bubbles: true,
      composed: true,
      detail: { event }
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ki-button': KiButton;
  }
}
