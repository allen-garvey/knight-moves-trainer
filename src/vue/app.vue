<template>
    <div>
        <h4>Moves: {{ numMoves }}</h4>
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
            numMoves: 0,
            moves: [],
            queenSquare: 27,
            knightSquare: 7
        };
    },
    computed: {
        numMoves(){
            return this.moves.length;
        },
    },
    methods: {
        squareClicked(square){
            this.knightSquare = square.number;
            this.moves.push({
                number: square.number
            });
        }
    }
};
</script>