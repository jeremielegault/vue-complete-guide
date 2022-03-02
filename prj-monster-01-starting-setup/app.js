function getRandomValue(min, max) {
    return Math.floor(Math.random()*(max - min)+ min) 
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            } 
            return {width: this.monsterHealth+'%'}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            } 
            return {width: this.playerHealth+'%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0) {
                // a draw
                this.winner = "It's a draw!"
            } else if (value <= 0) {
                // monster wins
                this.winner = "MONSTER WINS"
            } 
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                // a draw
                this.winner = "It's a draw!"
            } else if (value <= 0) {
                // player wins
                this.winner = "PLAYER WINS"
            }
        },
    },
    methods: {
        newGame() {
            this.monsterHealth = 100,
            this.playerHealth = 100,
            this.currentRound = 0,
            this.winner = null,
            this.logMessages = []
        },
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogMessage('Player', 'Attack', attackValue)
            this.attackPlayer()

        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLogMessage('Monster', 'Attack', attackValue)

        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.addLogMessage('Player', 'Attack', attackValue)
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(8, 20)
            if (this.playerHealth + healValue > 100 ) {
    
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.addLogMessage('Player', 'Heal', healValue)
            this.attackPlayer()
        },
        surrender() {
            this.winner = 'Monster Wins!'
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what, 
                actionValue: value
            })
        }
    }

})

app.mount('#game')