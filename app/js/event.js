var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    counter: 0,
    message: '',
  },
  methods: {
    clickHandler: function ($event, message) {
      this.counter ++
      this.message = message
    },
    
  },
})
