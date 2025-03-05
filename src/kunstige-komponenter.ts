import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/atoms/ki-button';
import './components/molecules/ki-sidebar';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('kunstige-komponenter')
export class KunstigeKomponenter extends LitElement {
  @property({ type: String }) header = 'Kunstige Komponenter Design System';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--kunstige-komponenter-background-color);
    }

    main {
      flex-grow: 1;
      position: relative;
      width: 100%;
    }

    .content-wrapper {
      display: flex;
      width: 100%;
    }

    .main-content {
      flex-grow: 1;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <main>
        <div class="content-wrapper">
          <ki-sidebar title="Component Library" position="left">
            <ul>
              <li>Buttons</li>
              <li>Inputs</li>
              <li>Typography</li>
              <li>Colors</li>
            </ul>
          </ki-sidebar>

          <div class="main-content">
            <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
            <h1>${this.header}</h1>

            <p>Explore our design system components:</p>
            
            <ki-button variant="primary" size="large">
              Primary Button
            </ki-button>
            
            <ki-button variant="secondary" size="medium">
              Secondary Button
            </ki-button>
            
            <ki-button variant="tertiary" size="small">
              Tertiary Button
            </ki-button>

            <a
              class="app-link"
              href="https://open-wc.org/guides/developing-components/code-examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code examples
            </a>
          </div>
        </div>
      </main>

      <p class="app-footer">
        🚽 Made with love by Simon
      </p>
    `;
  }
}
