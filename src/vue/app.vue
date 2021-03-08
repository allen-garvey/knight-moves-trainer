<template>
    <div>
        <chess-board :moves="moves"></chess-board>
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
            moves: [],
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>