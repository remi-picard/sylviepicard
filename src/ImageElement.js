import { LitElement, html, css } from 'lit-element';

export class ImageElement extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      titre: { type: String },
      descriptif: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        margin-left: 5px;
        margin-bottom: 5px;
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
        margin-left: -125px;
        width: 250px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `;
  }

  render() {
    const url = new URL(`./assets/img/moyen/${this.id}.jpeg`, import.meta.url)
      .href;
    return html`
      <img src=${url} title="${this.titre}" alt="${this.titre}" />
      <div class="titre">${this.titre}</div>
    `;
  }
}
