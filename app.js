new Vue ({
  el: '#app',
  data: {
    title: 'Mon titre'
  },
  methods: {
    reverseTitle: function () {
      this.title = this.title.split('').reverse().join('')
    }
  }
})
