var app = new Vue({
  el: '#app',
  data: {
    basePrice: 100,
  },
  methods: {
    methodsNumber: function () {
      return Math.random();
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    },
    taxIncludedPrice: {
      get: function () {
        return Math.ceil(this.basePrice * 1.08)
      },
      set: function (taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    computedNumber: function () {
      return Math.random();
    }
  }
})