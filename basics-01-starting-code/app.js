const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'finish the vue course asap',
            courseGoalB: 'Master vue and build amazing apps',
            vueLink: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#overview'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
