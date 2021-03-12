<template>
    <div :class="$style.container">
        <ol>
            <li 
                v-for="(move, i) in moves" 
                :key="`${i}-${move.move}`"
                :class="moveClass(move)"
            >
                {{ move.move }}
            </li>
        </ol>
    </div>
</template>

<style lang="scss" module>
    .container {

    }
    .invalid {
        text-decoration: line-through;
    }
</style>

<script>
export default {
    props: {
        moves: {
            type: Array,
            required: true,
        },
    },
    computed: {
    },
    methods: {
        moveClass(move){
            return {
                [this.$style.invalid]: !move.isValidMove
            };
        }
    }
};
</script>