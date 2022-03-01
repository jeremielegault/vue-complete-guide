const app = Vue.createApp({
    data() {
        return {
            yourName: 'Jeremie',
            yourAge: 30,
            imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'
        }
    },
    methods: {
        ageMath() {
            // const inFiveYears = this.yourAge + 5;
            // return inFiveYears
            return this.yourAge + 5;
        },
        favoriteNumber() {
            // const favoriteNum = Math.random();
            // return favoriteNum
            return Math.random()
        },

    }
})

app.mount('#assignment')