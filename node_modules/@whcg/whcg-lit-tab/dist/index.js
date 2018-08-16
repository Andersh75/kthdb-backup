'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@vaadin/vaadin-text-field');
require('@whcg/whcg-lit-text-field/theme/whcg-lit-text-field-styles.js');
var polymerElement_js = require('@polymer/polymer/polymer-element.js');

class WhcgLitTextField extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
        <style>
             vaadin-text-field {
                --text-field-input-field-bg-color: var(--parmaco-text-field-label-text-color);
             }
            

        </style>


        <h2>THIS IS H2</h2>
        <vaadin-text-field value="thevalue" label="thelabel"></vaadin-text-field>
    `
    };   
}

window.customElements.define('whcg-lit-text-field', WhcgLitTextField);

exports.WhcgLitTextField = WhcgLitTextField;
