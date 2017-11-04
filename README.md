# Corporate Dashboard

[![Greenkeeper badge](https://badges.greenkeeper.io/Bamieh/corp-dash.svg)](https://greenkeeper.io/)

A corporate dashboard application using a EmberJS. This project focuses on the usage of data storage files and Ember's Data storage model.

## Data Stores
**Geospatial view, identifying the number of employees at various company locations.**

This page uses JSON data from firebase to populate the file.

**“key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.**

Firebase real-time data.

**“data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.**

CSV data file loaded from file, converted into JSON and populated via handlebar templates.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/Bamieh/corp-dash.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

