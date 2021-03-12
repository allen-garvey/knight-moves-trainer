import { DIMENSIONS } from './coordinate.js';

export const getTargetSquares = (knightNumber, queenNumbers) => {
    const ret = [];

    for(let y=0;y<DIMENSIONS;y++){
        for(let number=y*DIMENSIONS+DIMENSIONS-1;number>=0;number--){
            if(number !== knightNumber && !queenNumbers[number]){
                ret.push(number);
            }
        }
    }

    return ret.reverse();
};
