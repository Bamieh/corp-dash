import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Promise(function(resolve, reject) {
      Ember.$.get( '/MOCK_ISSUES.csv' ).then(function(result) {
        resolve(csvJSON(result));
      });
    })

  }
});



function csvJSON(csv) {
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return {headers, result};
}