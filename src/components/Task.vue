<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Task_Type } from '../utils/types';

const props = defineProps({
  task: Object as () => Task_Type,
});

const emit = defineEmits(['delete-task']);

const deleteTask = () => {
  emit('delete-task', props.task?.id);
};

const onDragStart = (event: DragEvent) => {
  if(props.task) {
    event.dataTransfer?.setData('task-id', props.task.id.toString());
  }
};
</script>

<template>
  <div
    class="task"
    draggable="true"
    @dragstart="onDragStart"
  >
    <h4>{{ task?.title }}</h4>
    <p>{{ task?.description }}</p>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<style scoped>
.task {
  padding: 12px;
  margin-bottom: 8px;
  background-color: #e0e0e0;
  border-radius: 8px;
  cursor: grab;
}
</style>
