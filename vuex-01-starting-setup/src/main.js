import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
        console.log(context);
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
    logIn(state) {
        state.isLoggedIn = true
        console.log('login', state.isLoggedIn)
    },
    logOut(state) {
        state.isLoggedIn = false
        console.log('logout', state.isLoggedIn)
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
