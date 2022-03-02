const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            toggleSelected: false,
            inputBackground: ''
        }
    },
    computed: {
        hideParagraph() {
            return {
                user1: this.userInput === 'user1',
                user1: this.userInput === 'user1',
                visible: this.toggleSelected,
                hidden: !this.toggleSelected
            }
        },
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
          },
        toggleParagraph(){
            this.toggleSelected = !this.toggleSelected
            console.log('CLICKKKK')
        }
    }
})

app.mount('#assignment')