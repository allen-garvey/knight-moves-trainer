<template>
    <div>
        <chess-board
            :knight-square="knightSquare"
            :queen-square="queenSquare"
            @square-clicked="squareClicked"
        ></chess-board>
    </div>
</template>

<script>
import ChessBoard from './chess-board.vue';

export default {
    components: {
        ChessBoard,
    },
    data(){
        return {
            queenSquare: 27,
            knightSquare: 7
        };
    },
    computed: {
    },
    methods: {
        squareClicked(square){
            this.knightSquare = square.number;
        }
    }
};
</script>