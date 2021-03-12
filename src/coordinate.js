export const DIMENSIONS = 8;

export const numberToCoordinate = (number) => {
    return {
        x: number % DIMENSIONS,
        y: Math.floor(number / DIMENSIONS)
    };
};

export const coordinateToNumber = (x, y) => {
    return y * DIMENSIONS + x;
};

export const numberToMoveName = (number) => {
    const {x, y} = numberToCoordinate(number);
    const column = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
    }[x];
    const row = Math.abs(y - DIMENSIONS);
    return `N${column}${row}`;
};
