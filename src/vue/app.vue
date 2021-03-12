<template>
    <div>
        <h4>Moves: {{ numMoves }}</h4>
        <chess-board
            :knight-square="knightSquare"
            :queen-square="queenSquare"
            @square-clicked="squareClicked"
        ></chess-board>
        <move-list :moves="moves"></move-list>
    </div>
</template>

<script>
import { numberToMoveName } from '../coordinate.js';
import pathfinding from '../pathfinding.js';
import ChessBoard from './chess-board.vue';
import MoveList from './move-list.vue';

export default {
    components: {
        ChessBoard,
        MoveList
    },
    data(){
        return {
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
        knightSquares(){
            return pathfinding.knightSquares(this.knightSquare);
        },
    },
    methods: {
        squareClicked(square){
            if(square === this.knightSquare){
                return;
            }
            const isValidMove = !this.queenSquares[square] && !!this.knightSquares[square];
            if(isValidMove){
                this.knightSquare = square;
            }
            this.moves.push({
                move: numberToMoveName(square),
                isValidMove,
            });
        }
    }
};
</script>