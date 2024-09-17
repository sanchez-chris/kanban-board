<script setup lang="ts">
import { ref } from 'vue';
import Column from './Column.vue';
import NewTaskMenu from './NewTaskMenu.vue';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const tasks = ref<Task[]>([]);

const columns = ref([
  { name: 'To Do' },
  { name: 'In Process' },
  { name: 'Done' },
]);

const addTask = (title: string, description: string) => {
  tasks.value.push({
    id: Date.now(),
    title,
    description,
    status: 'To Do',
  });
};

const deleteTask = (id: number) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};

const updateTaskStatus = (id: number, status: string) => {
  const task = tasks.value.find(task => task.id === id);
  if (task) {
    task.status = status;
  }
};

const getTasksForColumn = (status: string) => {
  return tasks.value.filter(task => task.status === status);
};
</script>

<template>
  <div class="board">
    <NewTaskMenu @add-task="addTask" />
    <div class="columns">
      <Column
        v-for="(column, index) in columns"
        :key="index"
        :name="column.name"
        :tasks="getTasksForColumn(column.name)"
        @delete-task="deleteTask"
        @update-task-status="updateTaskStatus"
      />
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
}

.columns {
  display: flex;
  gap: 10px;  
  background-color: white;
}
</style>
