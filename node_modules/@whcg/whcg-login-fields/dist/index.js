'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@vaadin/vaadin-text-field/vaadin-text-field.js');
require('@vaadin/vaadin-text-field/vaadin-password-field.js');
require('@vaadin/vaadin-button/vaadin-button.js');

class WhcgLoginFields extends polymerElement_js.PolymerElement {

  static get template() {
    return polymerElement_js.html`
   
      <style>
        :host {
          display: inline-block;
        }
      </style>

      <vaadin-text-field id="txtEmail" type="email" placeholder="User..." theme="small" hidden$="[[user]]"></vaadin-text-field>
      <vaadin-password-field id="txtPassword" placeholder="Password..." theme="small" reveal-button-hidden hidden$="[[user]]"></vaadin-password-field>
      <vaadin-button id="btnLogin" theme="primary small">LOGIN</vaadin-button>
      <vaadin-button id="btnLogout" theme="primary small" hidden>LOGOUT</vaadin-button>
    `;
  }


  connectedCallback() {
    super.connectedCallback();

    this.config = {
      apiKey: this.apikey,
      authDomain: this.projectid + ".firebaseapp.com",
      databaseURL: "https://" + this.projectid + ".firebaseio.com",
      projectId: this.projectid,
      storageBucket: "",
    };


    firebase.initializeApp(this.config);

    const txtEmail = this.$.txtEmail;
    const txtPassword = this.$.txtPassword; 
    const btnLogin = this.$.btnLogin; 
    const btnLogout = this.$.btnLogout;

    btnLogin.addEventListener('click', e=> {
      const email = txtEmail.value;
      const password = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, password);
      promise.catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e=> {
      firebase.auth().signOut();
      btnLogout.setAttribute('hidden', '');
      btnLogin.removeAttribute('hidden');
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log('user!');
        console.log(user);
        this.user = user;
        btnLogout.removeAttribute('hidden');
        btnLogin.setAttribute('hidden', '');
        window.location = '/#/user/';

      } else {
        console.log('user not loged in');
        this.user = null;
        window.location = '/#/start/';
      }
      
    });
  
  }

  static get properties() {
    return {
      apikey: {
        type: String,
        notify: true,
        readOnly: false
      },
      projectid: {
        type: String,
        notify: true,
        readOnly: false
      },
      user: {
        type: Object,
        notify: true,
        readOnly: false,
        observer: '_userChanged'
      }
    };
  }

  _userChanged(newValue, oldValue) {
    if (!this.user) {
      this.$.txtEmail.value = "";
      this.$.txtPassword.value = "";
    }
  }
}


window.customElements.define('whcg-login-fields', WhcgLoginFields);

exports.WhcgLoginFields = WhcgLoginFields;
