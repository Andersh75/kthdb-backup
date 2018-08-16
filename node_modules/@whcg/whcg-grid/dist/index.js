'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@vaadin/vaadin-grid/vaadin-grid.js');
require('@vaadin/vaadin-grid/vaadin-grid-column.js');
require('@polymer/iron-ajax/iron-ajax.js');

/**
 * `WhcgGrid`
 * 
 * @customElement
 * @polymer
 */

class WhcgGrid extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
        <style>
           
        </style>
        <!-- Fetch an array of users to be shown in the grid -->
        <iron-ajax auto url="{{url}}" handle-as="json" last-response="{{users}}"></iron-ajax>
    
        <!-- The array is set as the <vaadin-grid>'s "items" property -->
        <vaadin-grid aria-label="Basic Binding Example" items="[[griddataobj.result]]">
    
          <vaadin-grid-column width="60px" flex-grow="0">
            <template class="header">Kostnadsslag</template>
            <template>[[item.object]]</template>
            <!-- If necessary, the footer could be set using <template class="footer"> -->
            <template class="footer">#</template>
          </vaadin-grid-column>
    
          <vaadin-grid-column>
            <template class="header">Year 1</template>
            <template>[[item.data.yearlyamounts.dataset.1]]</template>
            <template class="footer">First Name</template>
          </vaadin-grid-column>
    
          <vaadin-grid-column>
            <template class="header">Year 2</template>
            <template>[[item.data.yearlyamounts.dataset.2]]</template>
            <template class="footer">Last Name</template>
          </vaadin-grid-column>

          <vaadin-grid-column>
            <template class="header">Year 3</template>
            <template>[[item.data.yearlyamounts.dataset.3]]</template>
            <template class="footer">Last Name</template>
          </vaadin-grid-column>
    
        </vaadin-grid>
    `
};

constructor() {
    super();
    this.griddataobj = JSON.parse(`{
        "result": [
            {
                "firstName": "Anders",
                "lastName": "Hughes",
                "address": {
                    "street": "9317 Blue Berry Bank",
                    "city": "Purple Sage",
                    "state": "Montana",
                    "zip": "59089-0119",
                    "country": "USA",
                    "phone": "(406) 555-6423"
                },
                "email": "asher.hughes@company.com"
            }
        ]
    }`);

}
    static get properties() {

        return {
            
            url: {
                type: String,
                notify: true,
                readOnly: false,
                value: 'https://demo.vaadin.com/demo-data/1.0/people?count=200',
              
            },
            griddataobj: {
                type: Object,
                notify: false,
                readOnly: false
            },
            griddatastr: {
                type: String,
                notify: false,
                readOnly: false,
                observer: '_griddatastrChanged'
            },
        }
    };

    _griddatastrChanged() {
        console.log('grid');
        console.log(this.griddatastr);
        this.griddataobj = JSON.parse(this.griddatastr);
        console.log('grid');
        console.log(this.griddataobj);
    }
}

window.customElements.define('whcg-grid', WhcgGrid);

exports.WhcgGrid = WhcgGrid;
