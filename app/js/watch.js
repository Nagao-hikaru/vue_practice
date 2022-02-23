var app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue.js',
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    colors: [
      { name: 'Red'},
      { name: 'Green'},
      { name: 'Blue'},
    ]
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    message: function (newValue, oldValue) {
      console.log('new: %s, old:%s', newValue, oldValue)
    },
    km: function (value, h) {
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function (value) {
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function (value) {
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    },
    colors: {
      handler: function (newValue, oldValue) {
        console.log('updated!')
      },
      deep: true,
      immediate: true,
    }
    // firstName: function (value) {
    //   this.fullName = value + ' ' + this.lastName
    // },
    // lastName: function (value) {
    //   this.fullName = this.firstName + ' ' + value
    // },
  }
})