import {createStore} from 'vuex';
import game from './modules/game';
import player from './modules/player';

export default createStore({
   modules:{
       game,
       player
    }
});