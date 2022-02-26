var app = new Vue({
    el: '#app', //マウントする要素
    data: {
      items: null,
      keyWord: '',
      message: '',
    },
    watch: {
  
    },
    created: function () {
      this.keyWord = 'JavaScript'
      this.getAnswer()
    },
    methods: {
      getAnswer: function () {
        if (this.keyWord === '') {
          this.items = null
          return 
        }
  
        this.message = 'Loading...';
        var vm = this
        var params = { page: 1, per_page: 20, query: this.keyWord }
        axios.get('https://qiita.com/api/v2/items', { params })
          .then(function (response) {
            console.log(response);
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
  