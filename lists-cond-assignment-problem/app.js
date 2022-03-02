const app = Vue.createApp({
    data() {
      return { 
        enteredTaskValue: '',
        tasks: [],
        hideShowLog: true 
      };
    },
    computed: {
        buttonCaption() {
            return this.hideShowLog ? "Hide" : "Show";
        }
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTaskValue)
        console.log('tasks', this.tasks)
      },
      removeTask(idx) {
        this.tasks.splice(idx, 1);
      },
      hideShow() {
          this.hideShowLog = !this.hideShowLog
      }
    }
  });
  
  app.mount('#assignment');
  