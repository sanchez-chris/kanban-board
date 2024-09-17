<script setup lang="ts">
import { ref } from 'vue';
import { defineEmits } from 'vue';

const title = ref('');
const description = ref('');

const emit = defineEmits(['add-task']);

const createTask = () => {
  if (title.value.trim()) {
    emit('add-task', title.value, description.value);
    title.value = '';
    description.value = '';
  }
};
</script>

<template>
    <div class="container">
    <div class="box-1">
     <h2>Kanban Board</h2>
     <p class="intro-text">In the menu on the right, you can add new tasks. You can organize them into different columns using drag and drop.</p>
    </div>
    <div class="box-2">
      <div class="new-task-menu">
        <input v-model="title" type="text" placeholder="Task Title" data-testid="input-title"/>
        <textarea v-model="description" placeholder="Task Description" data-testid="description-title"></textarea>
        <button class="add-btn" @click="createTask" :disabled="!title" data-testid="add-task-button">Add Task</button>
      </div>
    </div>
   
  </div>


</template>

<style scoped>
.new-task-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input, textarea {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none; 
}

.add-btn {
  background-color: #e2e2e2;
  color: black;
  padding: 12px 20px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.add-btn:hover {
  border: 1px solid black;
}

.container {
    display: flex;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 14px;
    align-items: center;
  }

.box-1 {
  width: 33%;
  padding: 10px;
}

.box-2 {
  width: 66%;
  padding: 10px;
}
</style>
