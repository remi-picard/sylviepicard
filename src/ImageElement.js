import { LitElement, html, css } from 'lit-element';

export class ImageElement extends LitElement {
  static get properties() {
    return {
      fichierNom: { type: String },
      titre: { type: String },
      descriptif: { type: String },
      modeAffichage: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        margin-left: 5px;
        margin-bottom: 5px;
      }
      .container {
        position: relative;
      }
      @media screen and (max-width: 640px) {
        img {
          width: 100%;
        }
      }
      div.titre {
        z-index: 99;
        color: white;
        position: absolute;
        bottom: 5px;
        left: 50%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
      }

      @media screen and (max-width: 640px) {
        div.titre {
          margin-left: -100px;
          width: 200px;
        }
      }
    `;
  }

  render() {
    const url = new URL(
      `./assets/img/moyen/${this.fichierNom}`,
      import.meta.url
    ).href;
    return html`
      <style>
        @media screen and (min-width: 641px) {
          img {
            max-height: ${this.modeAffichage === 'full' ? '100%' : '300px'};
          }
          div.titre {
            margin-left: ${this.modeAffichage === 'full' ? '-150px' : '-100px'};
            width: ${this.modeAffichage === 'full' ? '300px' : '200px'};
          }
        }
      </style>
      <div class="container">
        <img src=${url} title="${this.titre}" alt="${this.titre}" />
        <div class="titre">${this.titre}</div>
      </div>
    `;
  }
}
