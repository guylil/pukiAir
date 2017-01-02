<template>
    <section class="container">
        <h1 class="title is-1">Players</h1>
        <h3 class="subtitle is-3">Click your name to check who your target is or to report a successful killing</h3>
        <!--stageScreen = 1-->
        <div v-if="stageScreen===1" class="player-list">
            <div v-for="(player, idx) in players" @click="showPlayerConfirm(player)" class="player-select box" :class="{dead : player.target === null}">
                {{player.name}}
            </div>
        </div>

        <!--stageScreen = 2-->
        <div v-if="stageScreen===2" class="stage box">
            <h1 class="title is-6">Are you {{currPlayer.name}}?</h1>
            <button style="float:left" @click="showKillConfirm" class="button is-success is-pulled-left">Yes I am</button>
            <button style="float:right" @click="stageScreen = 1" class="button is-pulled-right">No ..... </button>
        </div>

        <!--modal KillConfirm and target reminder-->
        <!--stageScreen = 3-->
        <div v-if="stageScreen===3" class="stage box">
            Your target is: {{currPlayer.target.name}}
            <br />
            And your killing word is: {{currPlayer.word}}
            <br /><br />
            <button class="button is-success is-pulled-left" @click="targetIsDead">The deed is done...</button>
            <button class="button is-pulled-right" style="float:right" @click="stageScreen = 1">I know what I must do.</button>
        </div>
        <div v-if="stageScreen===4" style="width:400px;">winner is : {{winner}}</div>

    </section>
</template>

<script>
    export default {
        props: {
            players: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                stageScreen: 1,
                currPlayer: null,
                killCount: 0,
                winner: null
            }
        },
        methods: {
            showPlayerConfirm: function(player){
                console.log('picked player',player.name);
                if(player.target !== null) {
                  this.currPlayer = player;
                  // console.log(player.name);
                  this.stageScreen = 2;
                }
            },
            showKillConfirm: function(){
                // console.log(player.name);
                this.stageScreen = 3;
            },
            targetIsDead() {
                const targetPlayer = this.currPlayer.target;
                if(targetPlayer.target === this.currPlayer) {
                    this.winner =  this.currPlayer.name;
                    this.stageScreen = 4;
                } else {
                  this.currPlayer.target = targetPlayer.target;
                  targetPlayer.target = null;
                  this.stageScreen = 2;
                }
            }
        }
    }

</script>

<style scoped>

.player-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.player-select {
    width: 170px;
    height: 90px;
    margin: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00D1B2;
    font-size: 2em;
    color: white;
    cursor: pointer;
}

.player-select:hover {
    background-color: white;
    color: #00D1B2;
    transition: 0.3s ease-in-out;
}

.stage {
    width: 350px;
    margin: auto;
    padding: 30px;
    height: 150px;
    width: 400px;
}

.button {
    margin: 7px;
}

.dead {
  color: gray;
}

</style>
