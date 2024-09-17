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
  <div class="new-task-menu">
    <input v-model="title" type="text" placeholder="Task Title" />
    <textarea v-model="description" placeholder="Task Description"></textarea>
    <button @click="createTask" :disabled="!title">Add Task</button>
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

button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
}
</style>
