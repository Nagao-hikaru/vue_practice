// Vue.component('hello-component', {
//   template: '<p>hello</p>',
// })
var helloComponent = {
  template: '<p>hello</p>',
}
var app = new Vue({
  el: '#app', //マウントする要素
  data: {
  },
  components: {
    'hello-component' : helloComponent
  }
})
