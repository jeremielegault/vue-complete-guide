<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" :age="age"></user-data>
   <button @click="setAge">Change Age</button> 
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue'

export default {
  components: {
    UserData
  },
  setup() {

    // const user = reactive({
    //   name: 'Maximilian', 
    //   age: 30,
    // });

    const firstName = ref('')
    const lastName = ref('')
    const lastNameInput = ref(null)
    const uAge = ref(31)

    provide('userAge', uAge);

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value
    })

      watch([uAge, uName], function(newValues, oldValues) {
        console.log('Old age: ', oldValues);
        console.log('New age: ', newValues);
        console.log('Old name: ', oldValues);
        console.log('New name: ', newValues);
      }); 

    function setFirstName(event) {
      firstName.value = event.target.value
    }
    // function setLastName(event) {
    //   lastName.value = event.target.value
    // }

    function setAge() {
      uAge.value = 69
    }
    function setLastName() {
      lastName.value = lastNameInput.value.value
    }

    return {age: uAge, userName: uName, setFirstName, setLastName, firstName, lastName, lastNameInput, setAge};
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>