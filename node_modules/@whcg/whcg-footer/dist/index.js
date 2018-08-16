'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@whcg/whcg-number-field');
require('@whcg/whcg-button');

class WhcgSearchBox extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
        <style>
            :host {
                padding: 20px;
                background-color: red;
            }
        </style>
  
            <whcg-number-field placeholder="Type..."></whcg-number-field>
            <whcg-button>Search</whcg-button>


    `;
    }

    static get properties() {

        return {

           
        }
    }



}

window.customElements.define('whcg-search-box', WhcgSearchBox);

exports.WhcgSearchBox = WhcgSearchBox;
