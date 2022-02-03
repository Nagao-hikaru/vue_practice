Vue.component('hello-component', {
  template: '<p>Hello</p>'
});
var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    newItem: '',
  },
  methods: {
    addItem: function (event) {
      alert();
    }
  }
})


