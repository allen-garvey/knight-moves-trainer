import { DIMENSIONS, numberToCoordinate, coordinateToNumber } from './coordinate.js';

const queenSquares = (queenNumber) => {
    const ret = {
        [queenNumber]: true,
    };
    const {x: queenX, y: queenY} = numberToCoordinate(queenNumber);
    
    // horizontal and vertical
    for(let y=0,number=0;y<DIMENSIONS;y++){
        for(let x=0;x<DIMENSIONS;x++,number++){
            if(x === queenX || y === queenY){
                ret[number] = true;
            }
        }
    }
    
    //diagonal to the lower right
    for(let y=queenY+1,x=queenX+1;y<DIMENSIONS&&x<DIMENSIONS;y++,x++){
        ret[coordinateToNumber(x, y)] = true;
    }

    //diagonal to the lower left
    for(let y=queenY+1,x=queenX-1;y<DIMENSIONS&&x>=0;y++,x--){
        ret[coordinateToNumber(x, y)] = true;
    }

    //diagonal to the upper right
    for(let y=queenY-1,x=queenX+1;y>=0&&x<DIMENSIONS;y--,x++){
        ret[coordinateToNumber(x, y)] = true;
    }

    //diagonal to the upper left
    for(let y=queenY-1,x=queenX-1;y>=0&&x>=0;y--,x--){
        ret[coordinateToNumber(x, y)] = true;
    }

    return ret;
};

const knightSquares = (knightNumber) => {
    const {x: knightX, y: knightY} = numberToCoordinate(knightNumber);

    return [
        {x: knightX + 2, y: knightY + 1},
        {x: knightX + 2, y: knightY - 1},
        {x: knightX - 2, y: knightY + 1},
        {x: knightX - 2, y: knightY - 1},
        {x: knightX + 1, y: knightY + 2},
        {x: knightX + 1, y: knightY - 2},
        {x: knightX - 1, y: knightY + 2},
        {x: knightX - 1, y: knightY - 2},
    ]
    .filter(({x, y}) => x >=0 && x < DIMENSIONS && y >=0 && y < DIMENSIONS)
    .reduce((ret, {x, y}) => {
        ret[coordinateToNumber(x, y)] = true;
        return ret;
    }, {});
};

export default {
    queenSquares,
    knightSquares,
};
