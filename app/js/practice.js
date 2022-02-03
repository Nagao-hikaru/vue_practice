Vue.component('hello-component', {
  template: '<p>Hello</p>'
});
var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    newItem: '',
    todos: [

    ]
  },
  methods: {
    addItem: function (event) {
      if (this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteInput: function () {
      this.newItem = '';
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    },
  }
})


