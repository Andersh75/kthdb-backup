'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@polymer/polymer/lib/elements/dom-repeat.js');
require('@vaadin/vaadin-list-box/vaadin-list-box.js');
require('@vaadin/vaadin-dropdown-menu/vaadin-dropdown-menu.js');
require('@vaadin/vaadin-item/vaadin-item.js');

/*
 * `WhcgNumberField`
 * 
 * @customElement
 * @polymer
 
 */
class WhcgSelect extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
      
	<vaadin-dropdown-menu id="vdm" on-value-changed="_appSelect" value="{{value}}" id="vaadinlistbox" placeholder="{{placeholder}}" label="{{label}}">
		<template>
			<vaadin-list-box>
				<template is="dom-repeat" items="{{objinput}}">
					<vaadin-item value$="[[item.value]]">[[item.caption]]<span> {{suffix}}</span></vaadin-item>
				</template>
			</vaadin-list-box>
		</template>
	</vaadin-dropdown-menu>

    `;
    }

    static get properties() {

        return {

            label: {
                type: String,
                notify: true,
                readOnly: false,
            },
            value: {
                type: String,
                notify: true,
                readOnly: false,
                //observer: '_valueChanged'
            },
            placeholder: {
                type: String,
                notify: true,
                readOnly: false,
            },
            suffix: {
                type: String,
                notify: true,
                readOnly: false,
            },
            kind: {
                type: String,
                notify: true,
                readOnly: false,
            },
            period: {
                type: String,
                notify: true,
                readOnly: false,
            },
            valueoutput: {
                type: String,
                notify: true,
                readOnly: false,
			},
			jsoninput: {
                type: String,
                notify: true,
				readOnly: false,
				observer: '_jsoninputChanged'
			},
			objinput: {
                type: Object,
                notify: true,
				readOnly: false,
            }
        }
	}
	
	_appSelect() {
		
		console.log('CHANGED!!');
		// console.log(this.$.vdm.__data.value);
		this.valueoutput = this.$.vdm.__data.value;
	}

    _valueChanged() {
		this.valueoutput = this.value;
		// console.log('CHANGED!!');
		// console.log(this.$.vdm.__data.value);
		// this.valueoutput = this.$.vdm.__data.value;
	}
	
	_jsoninputChanged() {
		this.objinput = JSON.parse(this.jsoninput);
		console.log('objInput');
		console.log(this.objinput);
	}

    connectedCallback() {
		super.connectedCallback();
		//this.valueoutput = this.$.vdm.__data.value;
		this.valueoutput = this.value;

        let event = new CustomEvent('childrenattached', {bubbles: true, composed: true});
        console.log('dispatchingEvent!!');
		this.dispatchEvent(event);
		// console.log('this.$.vaadinlistbox');
		// console.log(this.$.vaadinlistbox.shadowRoot);
		
		// this.$.vaadinlistbox.addEventListener('changed', console.log);
    }

}

window.customElements.define('whcg-select', WhcgSelect);

exports.WhcgSelect = WhcgSelect;
