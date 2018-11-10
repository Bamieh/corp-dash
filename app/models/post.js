import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('number'),
   // poll: function() {
   //    var _this = this;
   //    Ember.run.later( function() {
   //       _this.reload(); 
   //       _this.poll();
   //    }, 500);
   // }.observes('didLoad'),
});
