import { LitElement, html, css } from 'lit';

export class GetData extends LitElement {
    static properties={
        word: {type:String},
    }
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    constructor(){
        super();
        this.getdata();
        console.log("getdata");
        
    }

  
    

    getdata() {
        console.log("getdata");
        this.url="http://www.omdbapi.com/?s="+this.word+"&page=1&apikey=47392fcc";
        console.log(this.url);
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
customElements.define('get-data', GetData);
