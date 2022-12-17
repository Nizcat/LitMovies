import { LitElement, html, css } from "lit";

export class GetData extends LitElement {
  static properties = {
    url: { type: String },
  };
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  
  updated() {
    this.getdata();
    
  }

  getdata() {
    console.log(this.url, "en getdata");
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => this._sendData(data));
  }
  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("get-data", GetData);
