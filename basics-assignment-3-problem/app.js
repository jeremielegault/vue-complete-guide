const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    watch: {
        result() {
            const that = this
            setTimeout(function() {
                that.counter = 0
            }, 5000)
        }
    },
    computed: {
      result() {
        if (this.counter < 37) {
        return "Not there yet";
        } else if (this.counter > 37){
        return "Too much!"
        } else if (this.counter = 37) {
            return this.counter
        }
      },
    },
    methods: {
      add(num) {
        this.counter = this.counter + num;
      }
    },
  });
  
  app.mount("#assignment");
  