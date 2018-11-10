import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('geo-spatial');
  this.route('data-view');
  this.route('json-map');
  this.route('posts');
});

export default Router;
