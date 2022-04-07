<template>
  <div class="board">
    {{ $route.params.id }}
    {{boardData.id}}

  </div>
</template>

<script>
import board from "../json/board.json"

export default {
    name: "Board",
    data() {
        return{
            boardData: board
        }
    },
    methods:{
    }
}

</script>
<style>

</style>