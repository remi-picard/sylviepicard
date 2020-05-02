import { LitElement, html, css } from 'lit-element';

/**
 * Header Component
 *
 * @event {CustomEvent} header-component:change-type-event - Fires change in type whenever click on links header.
 */
export class HeaderElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      nav {
        margin-bottom: 5px;
      }
      #titre {
        padding-right: 50px;
        position: relative;
        top: 2px;
        font-size: 1.2em;
      }
      #titre h3 {
        display: inline;
      }
      ul {
        margin: auto;
        min-width: 300px;
        max-width: 800px;
        min-height: 40px;
        list-style: none;
      }
      li {
        display: inline;
      }
      li a {
        text-decoration: none;
      }
      li.liens-page {
        padding-left: 40px;
        font-size: 1.1em;
      }
      li.insta {
        padding-left: 15px;
      }
      li.insta img,
      li.gmail img {
        position: relative;
        top: 7px;
        font-size: 1em;
        width: 25px;
      }
    `;
  }

  render() {
    //<div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    const instaUrl = new URL(`./assets/icon/instagram.png`, import.meta.url)
      .href;
    //<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    const gmailUrl = new URL(`./assets/icon/gmail.png`, import.meta.url).href;
    return html`
      <header>
        <nav>
          <ul>
            <li id="titre"><h3>Sylvie PICARD</h3></li>
            <li class="gmail">
              <a href="mailto:sylviasculpture@gmail.com"
                ><img src=${gmailUrl}
              /></a>
            </li>
            <li class="insta">
              <a href="https://www.instagram.com/sylvia_picard/" target="_blank"
                ><img src=${instaUrl} />&nbsp;sylvia_picard</a
              >
            </li>
            <li class="liens-page">
              <a href="#" @click=${e => this.goTo('Sculptures')}>Sculptures</a>
            </li>
            <li class="liens-page">
              <a href="#" @click=${e => this.goTo('Pastels')}>Pastels</a>
            </li>
            <li class="liens-page">
              <a href="#" @click=${e => this.goTo('Dessins à la mine graphite')}
                >Dessins</a
              >
            </li>
          </ul>
        </nav>
      </header>
    `;
  }

  goTo(type) {
    const myEvent = new CustomEvent('change-type-event', {
      detail: { type },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }
}
