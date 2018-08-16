'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@whcg/whcg-button/theme/whcg-button-styles.js');
require('@vaadin/vaadin-button/src/vaadin-button.js');

class WhcgButton extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `


        <style>
             vaadin-button {
                 --whcg-host-font-size: var(--whcg-button-host-font-size);
                 --whcg-host-color: var(--whcg-button-host-color);
                 --whcg-host-background-color: var(--whcg-button-host-background-color);
                 --whcg-host-border-radius: var(--whcg-button-host-border-radius);
                 --whcg-host-border-style: var(--whcg-button-host-border-style);
                 --whcg-host-border-width: var(--whcg-button-host-border-width);
                 --whcg-host-border-color: var(--whcg-button-host-border-color);
                 
                 --whcg-host-height: var(--whcg-button-host-height);
                 --whcg-host-min-width: var(--whcg-button-host-min-width);
                 --whcg-host-padding-top: var(--whcg-button-host-padding-top);
                 --whcg-host-padding-bottom: var(--whcg-button-host-padding-bottom);
                 --whcg-host-padding-left: var(--whcg-button-host-padding-left);
                 --whcg-host-padding-right: var(--whcg-button-host-padding-right);
                 
                 --whcg-label-font-size: var(--whcg-button-label-font-size);
                 --whcg-label-font-weight: var(--whcg-button-label-font-weight);
                 --whcg-label-font-family: var(--whcg-button-label-font-family);
                --whcg-label-line-height: var(--whcg-button-label-line-height); 
                --whcg-label-padding-top: var(--whcg-button-label-padding-top);
                --whcg-label-padding-bottom: var(--whcg-button-label-padding-bottom);
                --whcg-label-padding-left: var(--whcg-button-label-padding-left);
                --whcg-label-padding-right: var(--whcg-button-label-padding-right);
                
             }
            

        </style>

        <vaadin-button>
            <slot></slot>
        </vaadin-button>

    `;
    }

    static get properties() {

        return {

            // label: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // },
            // value: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            //     observer: '_valueChanged'
            // },
            // placeholder: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // },
            // suffix: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // },
            // kind: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // },
            // period: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // },
            // valueoutput: {
            //     type: String,
            //     notify: true,
            //     readOnly: false,
            // }
        }
    }

    

    

}

window.customElements.define('whcg-button', WhcgButton);

exports.WhcgButton = WhcgButton;
