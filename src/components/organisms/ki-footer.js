class KiFooter extends HTMLElement {
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
            background-color: var(--ki-dark, #343a40);
            color: white;
            padding: 40px 24px;
            box-sizing: border-box;
            margin-top: 60px;
            position: relative;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
            border-radius: var(--ki-border-radius-outer, 8px) var(--ki-border-radius-outer, 8px) 0 0;
          }
          .footer-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          .footer-links {
            display: flex;
            gap: 30px;
            margin-bottom: 20px;
          }
          .footer-link {
            cursor: pointer;
            position: relative;
            padding: 5px 0;
            transition: all 0.3s ease;
            opacity: 0.8;
          }
          .footer-link:hover {
            opacity: 1;
          }
          .footer-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.7);
            transition: width 0.3s ease;
            border-radius: var(--ki-border-radius-inner, 4px);
          }
          .footer-link:hover::after {
            width: 100%;
          }
          .copyright {
            margin-top: 15px;
            font-size: 14px;
            color: #adb5bd;
            padding: 10px 20px;
            border-radius: var(--ki-border-radius-outer, 8px);
            background-color: rgba(0, 0, 0, 0.15);
          }
        </style>
        <div class="footer-container">
          <div class="footer-links">
            <div class="footer-link">Privacy</div>
            <div class="footer-link">Terms</div>
            <div class="footer-link">Contact</div>
          </div>
          <div class="copyright">© ${new Date().getFullYear()} Kunstige Komponenter</div>
        </div>
      `;
    }
  }
}

customElements.define('ki-footer', KiFooter);