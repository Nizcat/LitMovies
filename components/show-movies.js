import { LitElement, html, css } from "lit";
import "../get-data";
export class ShowMovies extends LitElement {
  static properties = {
    movies: { type: Object },
    page: { type: Number },
  };
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        color: white;
      }
      .card {
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
        grid-template-columns: 1fr 1fr 1fr;
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

    this.movies = [{}];
    this.page = 0;
    this.nextPage(this.page);
  }

  render() {
    return html`
      <div class="cardContainer">
        ${this.movies.map(
          (element) =>
            html`
              <div class="card" @click="${() => this.oneMovie(element)}">
                <h1>${element.Title}</h1>
                <img src="${element.Poster}" class="imageCard" />
                <p>Type: "${element.Type}"</p>
              </div>
            `
        )}
        <div>
          <button @click="${()=>this.nextPage(this.page)}" >${this.page} >Next Page</button>
        </div>
      </div>
    `;
  }

  oneMovie(item) {
    console.log(item);
  }
  nextPage(page){
    this.page++;
    console.log(this.page, "la ´´agina");
    this.dispatchEvent(
      new CustomEvent("page", {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("show-movies", ShowMovies);
