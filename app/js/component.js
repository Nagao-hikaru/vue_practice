Vue.component('hello-component', {
  template: '<p>hello</p>',
}),
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">{{ count }}</button>'
})
// var helloComponent = {
//   template: '<p>hello</p>',
// }
var app = new Vue({
  el: '#app', //マウントする要素
  data: {
  },
  // components: {
  //   'hello-component' : helloComponent //今ポーメント名はケバブケースで書く。
  // }
})
