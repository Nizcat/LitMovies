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
    this.word = "cat";
    this.movies = [{}];
    this.url= "http://www.omdbapi.com/?s=panda&page=1&apikey=47392fcc"
    this.addEventListener("word", (e) => {
      console.log(e.detail.item.word, "buscando word");
      this.word = e.detail.item.word;
      this.url= "http://www.omdbapi.com/?s="+this.word+"&page=1&apikey=47392fcc";
    });
    this.addEventListener("ApiData", (e) => {
      this.movies = e.detail.data.Search
      console.log(this.movies, "movies listener en papá");
      this.requestUpdate();
    });
    this.addEventListener("page", (e) => {
      this.page = e.detail.page
      console.log(this.page, "page in dad");
      this.url= "http://www.omdbapi.com/?s="+this.word+"&page="+this.page+"&apikey=47392fcc";
      this.requestUpdate();
    });
  }
 

  render() {
    return html`
     
            <word-picker></word-picker>
            <get-data url=${this.url}></get-data>
            <show-movies .movies=${this.movies}></show-movies>
          
       
    `;
  }
}
customElements.define("movie-app", MovieApp);
