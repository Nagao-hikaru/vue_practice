var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    counter: 0,
  },
  methods: {
    clickHandler: function (dd) {
      this.counter ++
    }
  },
})
