import { LitElement, html, css } from "lit";

export class WordPicker extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 100vw;
        height: 100vh;
      }
      .wordPicker {
        width: 12em;
      }
    `,
  ];

  render() {
    return html`
      <h1>Try a Word and find out the matches movies</h1>
      <input id="pickW" class="wordPicker" /><button @click="${this.pickWord}" class="wordPicker">
        try
      </button>
    `;
  }

  pickWord() {
    this.word = this.shadowRoot.getElementById("pickW").value;
    this.firstBoo = false;
    this.item = {
      word: this.word,
      conditional: this.firstBoo,
    };
    
    this._sendItem(this.item);
  }

  _sendItem(item) {
    this.dispatchEvent(
      new CustomEvent("word", {
        detail: { item },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("word-picker", WordPicker);
