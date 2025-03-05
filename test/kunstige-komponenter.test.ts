import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { KunstigeKomponenter } from '../src/kunstige-komponenter.js';
import '../src/kunstige-komponenter.js';

describe('KunstigeKomponenter', () => {
  let element: KunstigeKomponenter;
  beforeEach(async () => {
    element = await fixture(html`<kunstige-komponenter></kunstige-komponenter>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
