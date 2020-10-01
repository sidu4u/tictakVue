import {BOX_STATE} from '../../constants';

const state = {
  tictak:{
      row1:{
          1:BOX_STATE.EMPTY,
          2:BOX_STATE.EMPTY,
          3:BOX_STATE.EMPTY
      },
      row2:{
        1:BOX_STATE.EMPTY,
        2:BOX_STATE.EMPTY,
        3:BOX_STATE.EMPTY
      },
      row3:{
        1:BOX_STATE.EMPTY,
        2:BOX_STATE.EMPTY,
        3:BOX_STATE.EMPTY
      }
  },
  chance:BOX_STATE.CROSS
};

const actions = {
    editBox:{
                 root:true,
                 handler:({commit,dispatch},args)=>{
                                            commit('editBox',args);
                                            dispatch('checkWinner',null,{root:true});
                                        }
            },
    resetState:({commit})=>{
        commit('resetState');
    }
}

const mutations = {
    editBox:(state,{rowId,boxId})=>{
       const chance = state.chance; 
       state.tictak[rowId][boxId] = state.chance;
       state.chance = chance===BOX_STATE.CROSS ? BOX_STATE.ZERO:BOX_STATE.CROSS;
    },
    resetState:(state)=>{
        const rowKeys = Object.keys(state.tictak);
        const columnKeys = Object.keys(state.tictak[rowKeys[0]]);
    
        for(let row of rowKeys){
            for(let col of columnKeys){
                state.tictak[row][col] = BOX_STATE.EMPTY;
            }
        }
        state.chance=BOX_STATE.CROSS;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
};