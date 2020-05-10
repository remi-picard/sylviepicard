import { LitElement, html, css } from 'lit-element';

/**
 * Header Component
 *
 * @event {CustomEvent} header-component:change-type-event - Evénement pour changer de type d'oeuvre dans la galerie.
 * @event {CustomEvent} header-component:change-page-event - Evénement pour changer de page.
 */
export class HeaderElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      header {
        background-color: white;
      }
      nav {
        margin-bottom: 5px;
        text-align: center;
      }
      #titre {
        padding-right: 40px;
        position: relative;
        top: 2px;
        font-size: 1.2em;
      }
      #titre h3 {
        display: inline;
      }
      ul {
        margin: auto;
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
      div#brand {
        display: inline;
      }
      div#liens-page {
        display: inline;
      }
      li.liens-page {
        padding-left: 20px;
        font-size: 1.1em;
      }
      li.insta {
        padding-left: 15px;
      }

      li.insta span {
        font-size: 0.8em;
      }

      li.insta img,
      li.gmail img {
        position: relative;
        top: 7px;
        font-size: 1em;
        width: 25px;
      }

      @media screen and (max-width: 640px) {
        #titre {
          padding-right: 10px;
          font-size: 1.1em;
        }

        li.insta img,
        li.gmail img {
          position: relative;
          top: 4px;
          font-size: 1em;
          width: 15px;
        }

        li.insta span {
          display: none;
        }
        div#brand {
          margin: 10px auto 0 auto;
          display: block;
        }
        div#liens-page {
          margin: 10px auto 0 auto;
          padding-bottom: 5px;
          display: block;
        }
        li.liens-page {
          padding-left: 5px;
          font-size: 1em;
        }
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
            <div id="brand">
              <li id="titre"><h3>Sylvie PICARD</h3></li>
              <li class="gmail">
                <a href="mailto:sylviasculpture@gmail.com"
                  ><img src=${gmailUrl}
                /></a>
              </li>
              <li class="insta">
                <a
                  href="https://www.instagram.com/sylvia_picard/"
                  target="_blank"
                  ><img src=${instaUrl} /><span>&nbsp;sylvia_picard</span></a
                >
              </li>
            </div>
            <div id="liens-page">
              <li class="liens-page">
                <a href="#" @click=${e => this.goTo('Sculptures')}
                  >Sculptures</a
                >
              </li>
              <li class="liens-page">
                <a href="#" @click=${e => this.goTo('Pastels')}>Pastels</a>
              </li>
              <li class="liens-page">
                <a
                  href="#"
                  @click=${e => this.goTo('Dessins à la mine graphite')}
                  >Dessins</a
                >
              </li>
              <li class="liens-page">
                <a href="#" @click=${e => this.goToPage('parcours')}
                  >Parcours</a
                >
              </li>
            </div>
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

  goToPage(page) {
    const myEvent = new CustomEvent('change-page-event', {
      detail: { page },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }
}
