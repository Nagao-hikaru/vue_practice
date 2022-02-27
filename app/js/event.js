var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    counter: 0,
    message: '',
  },
  methods: {
    clickHandler: function ($event, message) {
      this.message = new Date().toLocaleTimeString()
    },
    clear: function () {
      this.message = ''
    },

  },
})
