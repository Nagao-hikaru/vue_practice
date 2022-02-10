Vue.filter('toUSD', function (jpy) {
  return jpy / 100;
});

Vue.filter('numberFormat', function (value) {
  return value.toLocaleString();
})

var app = new Vue({
  el: '#app',
  data: {
    jpyPrice: 2980000,
  },
  filters: {
    numberFormat: function (value) {
      return value.toLocaleString();
    }
  },
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('');
    }
  }
})