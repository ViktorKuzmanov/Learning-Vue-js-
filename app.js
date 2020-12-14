const cl = console.log

const app = Vue.createApp({
    data() {
        return {
          name: 'CodeNerd',
          counter: 0,
          isLoggedIn: true,
          books: ["book1", "book2","book3",],
          priceOfBitcoin: 19100
        }
      },
    
    methods: {
      increaseCounter(name,event) {
        this.counter += 1
        cl(event)
      },
      sayHi() {
        cl("hii")
      }
    },

    computed: {
      bitCoinFor100() {
        return 100 / this.priceOfBitcoin
      }
    }

  })
  
  app.mount('#app')