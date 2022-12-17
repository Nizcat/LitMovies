import { LitElement, html, css } from "lit";
import "./components/word-picker";
import "./components/show-movies";
import "./get-data";
export class MovieApp extends LitElement {
  static properties = {
    showMovies: { type: Boolean },
    word: { type: String },
    movies: { type: Object },
  };
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  constructor() {
    super();
    this.showMovies = true;
    this.pickedWord = "";
    this.word ="";
    this.movies=[{}];
    this.addEventListener("word", (e) => {
      this.selectedItem = e.detail;
      this.pickedWord = this.selectedItem.item;
      this.word=this.pickedWord.word;
      console.log(this.word, "listener en papá");
    });
    this.addEventListener("ApiData", (e) => {
        this.movies = e.detail.data.Search;
        
        console.log(this.movies, "movies listener en papá");
        this.requestUpdate();
      });
  }
  firstUpdated(){
    this.word;
    this.movies;
    this.requestUpdate();
  }

  render() {
    return html`
      ${this.showMovies ? html` <word-picker></word-picker>
      <get-data word=${this.word}></get-data>
      <show-movies .movies=${this.movies} ></show-movies> ` 
      : html`
      
      `}
    `;
  }
}
customElements.define("movie-app", MovieApp);
