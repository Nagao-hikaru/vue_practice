Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

var app = new Vue({
  el: '#app',
  data: {
    url: 'https://github.com/Nagao-hikaru/lara_practice',
    text: 'nvondopdfkvndfkfdnfdngvnafpkvapnvfkdnvpdfkjndfpndfkdfnpdlfnb',
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