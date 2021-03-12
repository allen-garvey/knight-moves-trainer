<template>
    <div>
        <h4>Moves: {{ numMoves }}</h4>
        <chess-board
            :knight-square="knightSquare"
            :queen-square="queenSquare"
            :target-square="targetSquare"
            @square-clicked="squareClicked"
        ></chess-board>
        <move-list :moves="moves"></move-list>
    </div>
</template>

<script>
import { numberToMoveName } from '../coordinate.js';
import { getTargetSquares } from '../moves';
import pathfinding from '../pathfinding.js';
import ChessBoard from './chess-board.vue';
import MoveList from './move-list.vue';

export default {
    components: {
        ChessBoard,
        MoveList
    },
    created(){
        this.reset();
    },
    data(){
        return {
            moves: [],
            targetSquares: [],
            queenSquare: 0,
            knightSquare: 0,
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
        targetSquare(){
            return this.targetSquares[this.targetSquares.length-1];
        },
    },
    methods: {
        reset(){
            this.moves = [];
            this.queenSquare = 27;
            this.knightSquare = 7;
            this.targetSquares = getTargetSquares(this.knightSquare, this.queenSquares);
        },
        squareClicked(square){
            if(square === this.knightSquare){
                return;
            }
            const isValidMove = !this.queenSquares[square] && !!this.knightSquares[square];
            if(isValidMove){
                this.knightSquare = square;

                if(square === this.targetSquare){
                    this.targetSquares.pop();
                }
            }
            this.moves.push({
                move: numberToMoveName(square),
                isValidMove,
            });
        }
    }
};
</script>