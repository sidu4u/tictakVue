<template>
    <div class="wrapper">
        <Player :name="player1.name" :score="player1.score"/>
        <div class="rows">
            <Row :onClick="updateState" v-for="(value,key) in state" :key="key" :rowId="key" :data="value"/>
         </div>
        <Player :name="player2.name" :score="player2.score"/>
    </div>    
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Player from './Player.vue';
import Row from './Row.vue';
export default {
    name:'Home',
    components:{
        Row,
        Player
    },
    computed:{
        ...mapState({
        state:state=>state.game.tictak,
        player1:state=>state.player.player1,
        player2:state=>state.player.player2
    })},
    methods:{
        updateState:function(rowId,boxId){this.$store.dispatch('editBox',{rowId,boxId})}
    }
    }
</script>

<style scoped>
    .rows{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 20vw;
        margin-right: 20vw;
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>