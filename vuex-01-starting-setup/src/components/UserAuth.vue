<template>
  <div>
    <button @click="logIn">Log In</button>
    <button @click="logoutHi">Log Out</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
        logIn: 'logIn',
        logout: 'logOut'
    })
  },
}
</script>
