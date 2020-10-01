<template>
        <div class="box" @click="boxClick">
            <span v-if="isEmpty"></span>
            <span v-else-if="isCross">X</span>
            <span v-else>O</span>
        </div>
</template>

<script>
import {BOX_STATE} from '../constants';
export default {
    name:'Box',
    props:{
        data:String,
        onClick:Function,
        id:String
    },
    methods:{
        boxClick:function(){
            if(this.isEmpty){
                this.onClick(this.id);
            }
        }
    },
    computed:{
        isCross(){
         return this.data === BOX_STATE.CROSS;
        },
        isEmpty(){
            return this.data === BOX_STATE.EMPTY;
        }
    },
    // updated(){
    //     console.log('Vue instance updated is:',this.id);
    // }

     updated(){
        console.log('box is updated: ',this.id);
    }
}
</script>

<style scoped>
   .box{
     display: flex;
     justify-content: center;
     align-items: center;  
     width: 100px;
     height: 100px;
     font-weight: 600;
     font-size: 50px;
     border:1px solid black;
     margin: 10px
   }
</style>>