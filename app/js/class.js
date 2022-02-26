var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    styleObject: {
      color: 'blue',
      fontSize: '36px',
    },
    color: 'blue',
    fontSize: 26,
    isLarge: false,
    hasError: true,
    largeClass: {
      large: true,
      'bg-gray': true,
    },
    dangerClass: {
      'text-danger': true,
    },
    classObject: {
      large: true,
      'text-danger': true,
    },
  },
})
