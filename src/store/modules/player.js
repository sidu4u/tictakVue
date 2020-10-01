import {getWinner} from '../../utils';
import {BOX_STATE} from '../../constants';

const state = {
    player1:{
        name:'Player 1',
        score:0,
    },
    player2:{
        name:'Player 2',
        score:0,
    }
}

const actions = {
    checkWinner:{
                root:true,
                handler:({commit,dispatch,rootState})=>{
                                                    const winner = getWinner(rootState.game.tictak);

                                                    if(winner !== BOX_STATE.EMPTY){
                                                        if(winner===BOX_STATE.CROSS){
                                                            commit('incrementPlayer2score');
                                                        }
                                                        else{
                                                            commit('incrementPlayer1score');
                                                        }
                                                        dispatch('game/resetState',null,{root:true});
                                                    }
                                                 }
                }
    }

const mutations = {
    incrementPlayer1score:(state)=>{
        state.player1.score++;
    },
    incrementPlayer2score:(state)=>{
        state.player2.score++;
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    actions
}