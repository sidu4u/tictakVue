<template>
  <div class="player">
    <PlayerName :name="name"/>
    <PlayerScore :score="score"/>
  </div>  
</template>

<script>
import PlayerScore from './PlayerScore.vue';
import PlayerName from './PlayerName.vue';

export default {
    name:'Player',
    props:{
        name:String,
        score:Number
    },
    components:{
        PlayerScore,
        PlayerName
    }
}
</script>

<style scoped>
    .player{
        display: flex;
        flex-direction: column;
    }
</style>