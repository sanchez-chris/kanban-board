<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Task from './Task.vue';
import type { Task_Type } from '../utils/types';

const props = defineProps({
  name: String,
  tasks: Array as () => Task_Type[],
});

const emit = defineEmits(['delete-task', 'update-task-status']);

const deleteTask = (id: number) => {
  emit('delete-task', id);
};

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const onDrop = (event: DragEvent) => {
  const taskId = event.dataTransfer?.getData('task-id');
  if (taskId) {
    emit('update-task-status', parseInt(taskId), props.name);
  }
};
</script>

<template>
  <div class="column">
    <h3>{{ name }}</h3>
    <div
      class="tasks"
      @drop="onDrop"
      @dragover="onDragOver"
    >
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
      />
    </div>
  </div>
</template>

<style scoped>
.column {
  flex: 1;
  padding: 16px;
  background-color: #f4f4f4;
  border-radius: 8px;
}

.tasks {
  min-height: 300px;
  padding: 8px;
  background-color: white;
  border-radius: 8px;
}
</style>
