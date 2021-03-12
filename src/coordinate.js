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
