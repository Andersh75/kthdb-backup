
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="whcg-lit-tab-styles" theme-for="vaadin-tab">
  <template>
  <style>
      :host {
        box-sizing: border-box;
        padding-top: var(--whcg-host-padding-top);
        padding-bottom: var(--whcg-host-padding-bottom);
        padding-left: var(--whcg-host-padding-left);
        padding-right: var(--whcg-host-padding-right);
        font-family: var(--whcg-host-font-family);
        font-size: var(--whcg-host-font-size);
        line-height: var(--whcg-host-line-height);
        font-weight: var(--whcg-host-font-weight);
        text-align: center;
        opacity: 1;
        color: var(--whcg-host-color);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        min-height: var(--whcg-host-min-height);
        min-width: 0;
      }

      :host(:hover) {
        color: var(--whcg-host-hover-color);
      }

      :host([selected]) {
        color: var(--whcg-host-selected-color);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--whcg-host-disabled-color);
      }


      :host::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 50%;
        width: 2px;
        height: var(--whcg-host-before-height);
        background-color: var(--whcg-host-before-background-color);
        border-radius: var(--whcg-host-before-border-radius);
        transform: translateY(50%) scale(1);
        opacity: 0
      }

      :host([selected])::before {
        opacity: 1;
      }


    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

