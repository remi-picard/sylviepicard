import { LitElement, html, css } from 'lit-element';

/**
 * Footer Component
 */
export class FooterElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      footer {
        background-color: white;
        padding-top: 10px;
        padding-bottom: 5px;
        text-align: center;
      }
      footer a {
        text-decoration: none;
      }
      section#nomSite {
        font-size: 1.1em;
      }

      section#creePar {
        font-size: 0.9em;
      }
      img#github {
        position: relative;
        top: 2.5px;
        width: 16px;
      }
    `;
  }

  render() {
    //<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    const githubUrl = new URL(`./assets/icon/github.png`, import.meta.url).href;
    return html`
      <footer>
        <section id="nomSite">
          © 2020 Sylvie PICARD - Sculpteur pastelliste
        </section>
        <section id="creePar">
          Site créé par&nbsp;<a
            href="https://github.com/remi-picard"
            target="_blank"
          >
            <img id="github" src=${githubUrl} />&nbsp;remi-picard</a
          >
        </section>
      </footer>
    `;
  }
}
