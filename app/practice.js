var app = new Vue({
  el: '#app', //マウントする要素
  data: {
    // dataオプションはマウント先で使用できるプロパティを定義できる。
    message: 'Hello Vue.js!',
    count: 10,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo'
    },
    colors: [
      'Red',
      'Green',
      'Blue',
    ]
  }
})