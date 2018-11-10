import Ember from 'ember';

export default Ember.Component.extend({
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }],
  actions: {
    pushChart() {
      var newData = {
        name: 'Jordan',
        data: [5, 7, 3]
      };

      var data = this.get('chartData').toArray();
      data.shift();
      data.push(newData);
      this.set('chartData', data);
    }
  }
});
