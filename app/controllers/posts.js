import Ember from 'ember';

const { Controller, computed, inject: { service } } = Ember;

export default Ember.Controller.extend({
  message: 'Notification message',
  htmlMessage: '<b>HTML notification message</b>',
  type: 'success',
  autoClear: true,
  clearDuration: 2400,
  htmlContent: false,
  position: 'top',

  notifications: service('notification-messages'),

  disableTimeoutInput: computed.not('autoClear'),

  computedMessage: computed('htmlContent', function() {
    if (this.get('htmlContent')) return this.get('htmlMessage');

    return this.get('message');
  }),
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      console.log('pubslighing post')
      this.get('notifications').info('You have one unread message');
      // newPost.save();
    },
    showNotifcation() {
      if (this.get('clearAll')) {
        this.get('notifications').clearAll();
      }
      console.log('test', {
        message: this.get('computedMessage'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration'),
        htmlContent: this.get('htmlContent')
      })
      this.get('notifications').addNotification({
        message: this.get('computedMessage'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration'),
        htmlContent: this.get('htmlContent')
      });
    }
  }
});
