<template>
    <div :class="$style.board">
        <div v-for="y in dimensions" :key="y" :class="$style.row">
            <div v-for="x in dimensions" :key="`${y}-${x}`" :class="squareStyle(x, y)">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    viewBox="0 0 77 70.38"
                    :class="[$style.queenBlack, $style.piece]" 
                    v-if="((y - 1) * dimensions + x - 1) === queenSquare"
                >
                    <use xlink:href="#queen-black-symbol" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
    $square-dimensions: 80px;
    $border-dimensions: 4px;
    $square-light: #f5e1b8;
    $square-dark: #ba845f;
    
    .board {
        border: 1px solid #000;
        margin: 0 auto;
        width: 8 * $square-dimensions;
    }

    .row {
        display: flex;
    }

    .square {
        background-color: $square-light;
        border: $border-dimensions solid $square-light;
        position: relative;
        height: $square-dimensions - 2 * $border-dimensions;
        width: $square-dimensions  - 2 * $border-dimensions;

        &:hover {
            border-color: magenta;
        }
    }

    .squareDark {
        background-color: $square-dark;
        border-color: $square-dark;
    }

    .piece {
        position: absolute;
    }

    .queenBlack {
        height: 110px;
    }
</style>

<script>
export default {
    props: {
    },
    data(){
        return {
            dimensions: 8,
            queenSquare: 27,
            knightSquare: 7
        };
    },
    computed: {
    },
    methods: {
        squareStyle(x, y){
            const isDark = x % 2 !== y % 2;

            return {
                [this.$style.square]: true,
                [this.$style.squareDark]: isDark,
            };
        }
    }
};
</script>