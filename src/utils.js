import {BOX_STATE} from './constants';


const checkRowWinner = (rowId,state)=>{
    const row = state[rowId];
    const keys = Object.keys(row);
    const first = row[keys[0]];
    let cell = null;
     
    for(let key of keys){
        cell = row[key];
        if(cell===BOX_STATE.EMPTY){
            return BOX_STATE.EMPTY;
        }
        if(cell!==first){
            return BOX_STATE.EMPTY;
        }
    }

    return first;
}


const checkColumnWinner = (columnId,state)=>{
    let cell = null;
    const rowKeys = Object.keys(state);
    const first = state[rowKeys[0]][columnId];

    for(let row of rowKeys){
        cell = state[row][columnId];
        if(cell===BOX_STATE.EMPTY){
            return BOX_STATE.EMPTY;
        }
        if(cell!==first){
            return BOX_STATE.EMPTY;
        }
    }

    return first;
}

const checkLeftDiagonalWinner = (state,rowKeys,columnKeys)=>{
    const first = state[rowKeys[0]][1];
    const length = rowKeys.length;
    let cell = null;

    for (let i=1;i<=length;i++){
        cell = state[rowKeys[i-1]][i];
        if(cell===BOX_STATE.EMPTY){
            return BOX_STATE.EMPTY;
        }
        if(cell!==first){
            return BOX_STATE.EMPTY;
        }
    }

    return first;
}

const checkRightDiagonalWinner = (state,rowKeys,columnKeys)=>{
    const length = rowKeys.length;
    const first = state[rowKeys[length-1]][1];
    let cell = null;

    for (let i=length-1;i>=0;i--){
        console.log('i',i);
            cell = state[rowKeys[i]][length-i];
            if(cell===BOX_STATE.EMPTY){
                return BOX_STATE.EMPTY;
            }
            if(cell!==first){
                return BOX_STATE.EMPTY;
            }
        
    }

    return first;

}
    

export const getWinner = (state) =>{
    const rowKeys = Object.keys(state);
    const columnKeys = Object.keys(state[rowKeys[0]]);

    const checkWinnerState = (winnerState) => winnerState!==BOX_STATE.EMPTY;
    
    for(let row of rowKeys){
        let rowWinner = checkRowWinner(row,state);
        if(checkWinnerState(rowWinner)){
             return rowWinner;
        }
    }

    for(let col of columnKeys){
        let columnWinner = checkColumnWinner(col,state);
        if(checkWinnerState(columnWinner)){
            return columnWinner;
       }
    }

    const leftDiagonalWinner = checkLeftDiagonalWinner(state,rowKeys,columnKeys);
    if(checkWinnerState(leftDiagonalWinner)){
        return leftDiagonalWinner;
    }

    const rightDiagonalWinner = checkRightDiagonalWinner(state,rowKeys,columnKeys);
    if(checkWinnerState(rightDiagonalWinner)){
        return rightDiagonalWinner;
    }

    return BOX_STATE.EMPTY;
}
