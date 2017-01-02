<template>
    <section class="assign-targets">
            <div v-if="currPlayer" class="current-player box">
            <p class="title is-4">If you are:</p>
            <span class="title is-1">{{currPlayer.name}}<span>
            <p class="title is-4">Please click the button</p>
            <button class="button is-medium is-primary" @click="showTarget = true">Yes, It's Me</button>
            <div id="modal" class="modal" :class="{'is-active': showTarget }">
                <div class="modal-background"></div>
                <div class="box modal-content">
                    <p class="title is-3">Your target is:</p>
                    <span class="title is-1">{{currPlayer.target.name}}</span>
                    <p class="title is-4">and you need to make him say:</p>
                    <span class="title is-2">{{currPlayer.word}}</span><br/>
                    <button @click="confirm" class="button is-big is-success">Got it!</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            players:{
                type: Array
            }
        },
        data() {
            return {
                currPlayer: null,
                showTarget: false,
                i: 0
            }
        },
        created() {
            // console.log('this.players',this.players);
            this.currPlayer = this.players[this.i];
            // console.log('this.currPlayer',this.currPlayer);
        },
        methods: {
            itIsMe() {
                this.showTarget = true
            },
            confirm() {
                this.showTarget = false;
                this.i++;
                this.currPlayer = this.players[this.i];
                if (this.players.length === this.i)  this.$emit('doneAssigning')
            }
        },
    }
</script>
<style scoped>

.box{
    width: 350px;
    margin: auto;
}

.button {
    margin: 5px;
}

.title {
    margin: 10px;
}
</style>
