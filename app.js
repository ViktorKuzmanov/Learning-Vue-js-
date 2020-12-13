const cl = console.log

const app = Vue.createApp({
    data() {
        return {
          name: 'CodeNerd',
          counter: 0,
          isLoggedIn: true,
          books: ["book1", "book2","book3",]
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
    }
  })
  
  app.mount('#app')