import { LitElement, html, css } from 'lit-element';
import { OeuvreService } from './services/OeuvreService';

export class SylviePicard extends LitElement {
  static get properties() {
    return {
      _oeuvres: { type: Array },
      _modeAffichage: { type: String },
      _displayGalerie: { type: Boolean },
      _displayParcours: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
      @media screen and (max-width: 640px) {
        .container {
          flex-direction: column;
          justify-content: space-around;
        }
      }
      @media screen and (min-width: 641px) {
        .container {
          justify-content: center;
        }
      }

      @media screen and (max-width: 640px) {
        .modeAffichage {
          display: none;
        }
      }
      @media screen and (min-width: 641px) {
        .modeAffichage {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 50px;
          height: 50px;
          z-index: 99;
        }
      }
      #parcours {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    this._modeAffichage = 'full';
    this._displayGalerie = true;
    this._displayParcours = false;
    this._oeuvres = OeuvreService.list();
    this.addEventListener('change-type-event', e =>
      this._changeType(e.detail.type)
    );
    this.addEventListener('change-page-event', e =>
      this._changePage(e.detail.page)
    );
  }

  render() {
    //<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    const mosaicUrl = new URL(`./assets/icon/square.png`, import.meta.url).href;
    return html`
      <header-element></header-element>
      <div
        id="galerie"
        style="display: ${this._displayGalerie ? 'block' : 'none'}"
      >
        <div class="container">
          ${this._oeuvres.map(
            o =>
              html`<image-element
                fichierNom=${o.fichierNom}
                titre="${o.titre}"
                descriptif="${o.descriptif.replace(/\n/g, '<br/>')}"
                modeAffichage="${this._modeAffichage}"
              ></image-element>`
          )}
        </div>
        <div class="modeAffichage">
          <img
            src=${mosaicUrl}
            @click=${e => this._toggleModeAffichage()}
            alt="Mode d'affichage"
            title="Mode d'affichage"
          />
        </div>
      </div>
      <div
        id="parcours"
        style="display: ${this._displayParcours ? 'block' : 'none'}"
      >
        <parcours-element></parcours-element>
      </div>
      <footer-element></footer-element>
    `;
  }

  _changeType(type) {
    this._displayGalerie = true;
    this._displayParcours = false;
    this._oeuvres = OeuvreService.list(type);
  }

  _changePage(page) {
    if (page === 'parcours') {
      this._displayGalerie = false;
      this._displayParcours = true;
    }
  }

  _toggleModeAffichage() {
    this._modeAffichage = this._modeAffichage === 'full' ? 'mosaic' : 'full';
  }
}
