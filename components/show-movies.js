import { LitElement, html, css } from "lit";
import "../get-data";
export class ShowMovies extends LitElement {
  static properties = {
    movies: { type: Object },
  };
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction:column;
        color:white;
      }
      .card{
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 1em;
        border-radius: 15px;
        justify-content: calc();
        align-items: center;

      }
      .cardContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2em;
        margin-top: 2em;
        justify-items: center;
        width: 90vw;
      }
      .imageCard {
        box-shadow: 0.4em 0.4em 1em white;
      }
    `,
  ];
  
  
  constructor() {
    super();
    
    this.movies = [{ }];
  }

  render() {
    return html`
    <div class="cardContainer">
    ${this.movies.map(
        (element) =>
          html`
            <div class="card">
              <h1>${element.Title}</h1>
              <img src="${element.Poster}" class="imageCard" />
              <p>Type: "${element.Type}"</p>
            </div>
          `
      )}
    </div>
    `;
  }
}
customElements.define("show-movies", ShowMovies);
