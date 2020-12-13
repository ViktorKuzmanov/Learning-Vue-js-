const app = Vue.createApp({
    data() {
        return {
          name: 'CodeNerd',
          counter: 0,
          isLoggedIn: true
        }
      },
    
    methods: {
      increaseCounter() {
        this.counter += 1
      }
    }
  })
  
  app.mount('#app')