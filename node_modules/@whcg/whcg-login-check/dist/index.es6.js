import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';

/**
 * LoginCheck
 */
class WhcgLoginCheck extends PolymerElement {

  static get properties() {
    return {
      user: {
        type: Object,
        notify: true,
        readOnly: false,
        observer: '_userChanged'
      },
      path: {
        type: String,
        notify: true,
        readOnly: false,
        observer: '_pathChanged'
      },
      tail: {
        type: Object,
        notify: true,
        readOnly: false
      }
    };
  }

  constructor() {
    super();
  }

  _pathChanged(newValue, oldValue) {
    if (this.user) {
      if(this.path === 'user' || 'start') {
        // console.log('test')
        // console.log('this.tail');
        // console.log(this.tail.path);
        // if(this.tail.path === '/fallback') {
        //   this.tail.path = "/";
        // }
        window.location = '/#/user' + this.tail.path;
      } else {
        window.location = '/#/user';
      } 
    } else {
      if(this.path === 'user' || 'start') {
        // console.log('this.tail');
        // console.log(this.tail.path);
        // if(this.tail.path === '/fallback') {
        //   this.tail.path = "/";
        // }
        window.location = '/#/start' + this.tail.path;
      } else {
        window.location = '/#/start';
      } 
    }
  }

  _userChanged(newValue, oldValue) {
    if (this.user) {
      if(this.path === 'user' || 'start') {
        // console.log('this.tail');
        // console.log(this.tail.path);
        // if(this.tail.path === '/fallback') {
        //   this.tail.path = "/";
        // }
        window.location = '/#/user' + this.tail.path;
      } else {
        window.location = '/#/user';
      } 
    } else {
      if(this.path === 'user' || 'start') {
        // console.log('this.tail');
        // console.log(this.tail.path);
        // if(this.tail.path === '/fallback') {
        //   this.tail.path = "/";
        // }
        window.location = '/#/start' + this.tail.path;
      } else {
        window.location = '/#/start';
      } 
    }
  }
}

window.customElements.define('whcg-login-check', WhcgLoginCheck);

export { WhcgLoginCheck };
