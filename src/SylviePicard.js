import { LitElement, html, css } from 'lit-element';
import { OeuvreService } from './services/OeuvreService';

export class SylviePicard extends LitElement {
  static get properties() {
    return {
      _oeuvres: { type: Array },
    };
  }

  static get styles() {
    return css`
      @media screen and (max-width: 640px) {
        .container {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
        }
      }
      @media screen and (min-width: 641px) {
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }
      }
    `;
  }

  constructor() {
    super();
    this._oeuvres = OeuvreService.list();
    this.addEventListener('change-type-event', e =>
      this._changeType(e.detail.type)
    );
  }

  render() {
    return html`
      <header-element></header-element>
      <div class="container">
        ${this._oeuvres.map(
          o =>
            html`<image-element
              fichierNom=${o.fichierNom}
              titre="${o.titre}"
              descriptif="${o.descriptif.replace(/\n/g, '<br/>')}"
            ></image-element>`
        )}
      </div>
    `;
  }

  _changeType(type) {
    console.log('_changeType, type=' + type);
    this._oeuvres = OeuvreService.list(type);
  }
}
