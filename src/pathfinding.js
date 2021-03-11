const DIMENSIONS = 8;

const numberToCoordinate = (number) => {
    return {
        x: number % DIMENSIONS,
        y: Math.floor(number / DIMENSIONS)
    };
};

const coordinateToNumber = (x, y) => {
    return y * DIMENSIONS + x;
};

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

export default {
    queenSquares
};
