
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="whcg-lit-tabs-styles" theme-for="vaadin-tabs">
  <template>
  <style>
      :host {
        box-shadow: var(--whcg-host-box-shadow);
        display: inline-flex;
        padding-top: var(--whcg-host-padding-top);
        padding-bottom: var(--whcg-host-padding-bottom);
        padding-left: var(--whcg-host-padding-left);
        padding-right: var(--whcg-host-padding-right);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

