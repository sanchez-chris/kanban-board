<script setup lang="ts">
import Board from './components/Board.vue';
</script>

<template>
  <div id="app_board" class="app_board">
    <Board />
  </div>
</template>

<style scoped>
#app_board {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  
}

html, body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.board {
  padding: 20px;
}

.columns {
  display: flex;
  gap: 20px;
}

</style>
