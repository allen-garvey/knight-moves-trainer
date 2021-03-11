const DIMENSIONS = 8;

const numberToCoordinate = (number) => {
    return {
        x: number % DIMENSIONS,
        y: Math.floor(number / DIMENSIONS)
    };
};

// const coordinateToNumber = (x, y) => {
//     return y * DIMENSIONS + x;
// };

const queenSquares = (queenNumber) => {
    const ret = {
        [queenNumber]: true,
    };
    const {x: queenX, y: queenY} = numberToCoordinate(queenNumber);
    
    for(let y=0,number=0;y<DIMENSIONS;y++){
        for(let x=0;x<DIMENSIONS;x++,number++){
            if(x === queenX || y === queenY){
                ret[number] = true;
            }
        }
    }

    return ret;
};

export default {
    queenSquares
};
