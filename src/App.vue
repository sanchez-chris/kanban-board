<template>
  <div id="app">
    <h1>Kanban Board</h1>
    <Board />
  </div>
</template>

<script setup>
import Board from './components/Board.vue';
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
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
