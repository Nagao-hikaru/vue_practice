var app = new Vue({
  el: '#app',
  data: {
    price: 2980000,
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