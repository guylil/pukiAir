<template>
  <div id="killingWord">
    <player-init v-if="isNotDone" @doneInit="doneInit"></player-init>
    <assaign-targets v-if="isAssigning" @doneAssigning="doneAssigning" :players="players"></assaign-targets>
    <game-board v-if="isSetupDone" :players="players"></game-board>
    <button @click="restartGame">Restart Game</button>
  </div>
</template>

<script>
import PlayerInit from "src/components/theKillingWord/player-init.vue"
import AssaignTargets from "src/components/theKillingWord/assign-targets.vue"
import gameBoard from "src/components/theKillingWord/game-board.vue"

import {setState, getState} from './game-state'

export default {
    name: 'killingWord',
    data () {
        return {
            players: [],
            isNotDone: true,
            isAssigning: false,
            isSetupDone: false
        }
    },
    methods: {
        restartGame() {
          setState(null);
          this.players = [];
          this.isNotDone = true;
          this.isAssigning = false;
          this.isSetupDone = false;

        },
        doneInit(playersArr) {
            // console.log('playersArr', playersArr);

            this.players = playersArr;
            this.isNotDone = false;
            this.isAssigning = true;
            setState(this.players);
            console.log(this.players);

        },
        doneAssigning() {
          this.isAssigning = false;
          this.isSetupDone = true;
        }
    },
    components: {
            PlayerInit,
            AssaignTargets,
            gameBoard
    },
    watch: {
        players(){
            // console.log('players', this.players);
        }
    },
    created() {
      var state = getState();
      if (state) {
        this.isNotDone = false;
        this.players = state;
        this.doneAssigning();
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
