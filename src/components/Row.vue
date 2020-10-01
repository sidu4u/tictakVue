<template>
    <div class="row">
        <Box :onClick="_onClick" v-for="(value,key) in data" :key="key" :data="value" :id="key"/>
    </div>
</template>

<script>
import Box from './Box.vue';

export default {
    name:'Row',
    props:{
        onClick:Function,
        rowId:String,
        data:Object
    },
    components:{
      Box
    },
    methods:{
       _onClick:function(boxId){
           this.onClick(this.rowId,boxId);
       }
    },
    updated(){
        console.log('row is updated: ',this.rowId);
    }
}
</script>

<style scoped>
    .row{
        display: flex;
        flex-direction: row;
    }
</style>