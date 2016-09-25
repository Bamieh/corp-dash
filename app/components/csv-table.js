import Ember from 'ember';


export default Ember.Component.extend({
  attributeBindings: ['id'],
  didInsertElement() {
    $(document).ready(() => {
      let tableId = `#${this.id}`;
      this.$(tableId).tablesorter();
    }); 
  }
});