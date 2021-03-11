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
import pathfinding from '../pathfinding.js';
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
        queenSquares(){
            return pathfinding.queenSquares(this.queenSquare);
        },
    },
    methods: {
        squareClicked(square){
            if(square === this.knightSquare){
                return;
            }
            const isValidMove = !this.queenSquares[square];
            if(isValidMove){
                this.knightSquare = square;
            }
            this.moves.push({
                number: square,
                isValidMove,
            });
        }
    }
};
</script>