var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    now: '',
  },
  methods: {
    onclick: function() {
      this.now = new Date().toLocaleString();
    }
  }
})


