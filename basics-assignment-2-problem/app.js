const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    submitForm() {
      // event.preventDefault();
      alert("Submitted!!!!!!!!!!!!!");
    },
    confirmInput(event) {
      this.name = event.target.value;
    },
    enterName(event) {
      this.confirmedName = event.target.value;
    },
  },
});

app.mount("#assignment");
