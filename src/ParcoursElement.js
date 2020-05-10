import { LitElement, html, css } from 'lit-element';

/**
 * Parcours Component
 */
export class ParcoursElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      main {
        display: flex;
        flex-wrap: wrap;
        text-align: justify;
        min-height: 90vh;
      }

      section {
        justify-content: center;
        margin: 0 auto;
      }

      #photos {
        padding-top: 10px;
        text-align: center;
        max-width: 450px;
      }

      #biographie {
        font-size: 1.1em;
        max-width: 600px;
        padding: 0 25px;
      }

      #parcours {
        font-size: 1.1em;
        max-width: 600px;
        padding: 0 25px 20px 25px;
      }
    `;
  }

  render() {
    const sylvieUrl = new URL(`./assets/img/sylvie.png`, import.meta.url).href;
    const bonchamp2016Url = new URL(
      `./assets/img/bonchamp2016.png`,
      import.meta.url
    ).href;

    return html`
      <main>
        <section id="photos">
          <img src=${sylvieUrl} alt="Sylvie PICARD" title="Sylvie PICARD" />
          <blockquote>
            <p>
              <em
                >Observer, transcrire en trois dimensions dans l'argile, un être
                vivant, en lui donnant un souffle de vie : à la fois un défi et
                une passion qui m'anime depuis une vingtaine d'années...</em
              >
            </p>
          </blockquote>

          <img
            src=${bonchamp2016Url}
            alt="Bonchamp 2016"
            title="Bonchamp 2016"
          />
          <p>
            Invitée d'honneur en sculpture aux Angenoises de Bonchamp en Mayenne
            (Mai 2016).
          </p>
        </section>
        <section id="biographie">
          <h1>Biographie</h1>
          <p>
            Née en 1961 à Paris, autodidacte en sculpture et dessin. Dés l'âge
            de 20 ans approche de l'argile en atelier céramique.
          </p>
          <p>
            Depuis 1998, modelage du corps humain d'après modèles vivants et
            photographies, étude de l'anatomie humaine et animale.
          </p>
          <p>
            Pratique des techniques de fabrication (modelage, stage de fonderie
            d'art en 2010, création de mon 1er bronze, dorure à l'assiette pour
            pose de feuilles d'or et cuisson RAKU appliquée sur des statuettes).
          </p>
          <p>
            Des rencontres passionnantes d'artistes sculpteurs et peintres ont
            jalonné mon existence et nourrissent plus que jamais mon attirance
            pour les arts plastiques.
          </p>
          <p>
            Actuellement, modeler et dessiner au quotidien, me permet de
            naviguer entre la monochromie de l'argile et le multicolore du
            pastel sec, de l'espace au plan et de modifier mon rythme de
            création. J'alterne ainsi des cycles différents dans la création.
          </p>
          <p>
            Aussi, le modelage des pigments, le pastel sec, m'offre la
            possibilité de réaliser des portraits expressifs aux couleurs vives
            tout en donnant une impression de volume, de velouté en plus de
            l'effet photographique.
          </p>
          <p>
            Le dessin m'ouvre une autre fenêtre dans la création, un autre mode
            de communication avec le public et artistes peintres mais aussi la
            possibilité de travailler sur un même thème dans les deux
            disciplines (sculpture et dessin).
          </p>
        </section>
        <section id="parcours">
          <h1>Parcours</h1>
          <p>
            Dès l'âge de 8 ans, dans ma rue (Villa Madeleine à CHÂTILLON), en
            région parisienne (92), Gabriel COQUELIN mon voisin, sculpteur sur
            marbre et pierre a attiré ma curiosité. J'étais très impressionnée
            et admirative, je prenais déjà conscience de la beauté de ses
            réalisations, bustes, statuettes, nus en marbre rose sans oublier
            les statues monumentales taillées dans la pierre à la gouge, à la
            force du poignet....un autre monde!
          </p>
          <p>
            A l'âge de 32 ans, rencontres artistiques dans le sud de la France,
            dessin, peinture et initiation à la taille de pierre du Gard. Puis
            en 1998, découverte envoûtante de la sculpture d'après modèle vivant
            en atelier, ainsi est née ma passion pour le modelage complexe du
            corps humain.
          </p>
          <p>
            En 1999, arrivée à SAINT BAUDELLE en MAYENNE (53), Monsieur Daniel
            LERAY, Maître aquarelliste et président D'ARFI (Association de
            peintres qui défend l'art figuratif à MAYENNE), me demande d'exposer
            mes sculptures (1er sculpteur exposant de l'association ARFI en
            2000) dans une chapelle magnifiquement restaurée « la chapelle des
            CALVAIRIENNES à MAYENNE. Et depuis j'enchaîne différentes
            expositions en Mayenne et autres départements limitrophes.
          </p>
        </section>
      </main>
    `;
  }
}
