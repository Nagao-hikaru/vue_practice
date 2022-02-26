var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    items: null,
    keyWord: '',
    message: '',
  },
  watch: {
    keyWord: function (newKeyWord, oldKeyWord) {
      // console.log(newKeyWord)
      this.message = 'waiting for you stop typing'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // this.keyWord = 'JavaScript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function () {
      if (this.keyWord === '') {
        this.items = null
        this.message = '';
        return 
      }

      this.message = 'Loading...';
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyWord }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function (response) {
          console.log(response);
          vm.items = response.data
        })
        .catch(function (error) {
          vm.message = 'error message'
        })
        .finally(function () {
          vm.message = ''
        })
    }
  },
})
