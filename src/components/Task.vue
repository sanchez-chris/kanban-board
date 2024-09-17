<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Task_Type } from '../utils/types';
import closeIcon from "../images/close.png"; 

const props = defineProps({
  task: Object as () => Task_Type,
});

const emit = defineEmits(['delete-task']);

const deleteTask = () => {
  emit('delete-task', props.task?.id);
};

const onDragStart = (event: DragEvent) => {
  console.log("drag start");
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
      data-testid="task"
    >
      <div class="delete-button-container">
        <button class="delete-btn" @click="deleteTask" data-testid="delete-task-button">
          <img :src="closeIcon" alt="close" class="close-icon" />
        </button>
      </div>

      <h4>{{ task?.title }}</h4>
      <p>{{ task?.description }}</p>
    </div>
 
</template>

<style scoped>
.task {
  padding: 12px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 8px;
  cursor: grab;
}

.delete-button-container {
  display: flex;
  justify-content: end;
}

.delete-btn:hover {
  border: 1px solid black;
}

.close-icon {
  height: 10px;
  width: 10px;
}
</style>
