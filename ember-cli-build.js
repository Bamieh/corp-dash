/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  // all possible options
  var app = new EmberApp(defaults, {
    'ember-cli-bootstrap': {
      'importBootstrapJS': true
    },
    emberHighCharts: {
      includeHighCharts: true,
      includeHighStock: false,
      includeHighMaps: false,
      includeHighChartsMore: false,
      includeHighCharts3D: false,
      // includeModules: ['map', 'broken-axis', 'heatmap']
      /* available modules:
        boost, broken-axis, canvas-tools, data, drilldown, exporting, funnel,
        heatmap, map, no-data-to-display, offline-exporting, solid-gauge, treemap
      */
    }
  });
  // var app = new EmberApp(defaults, {
  //   // Add options here
  // });
  app.import('bower_components/tablesorter/jquery.tablesorter.min.js');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
