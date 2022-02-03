Vue.component('hello-component', {
  template: '<p>Hello</p>'
});
var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    message: 'Hello world',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: [
      'JavaScript',
      'Ruby',
      'Python',
    ]
  },
  methods: {
    clicks: function () {
      this.message = 'clicked';
    }
  }
})


