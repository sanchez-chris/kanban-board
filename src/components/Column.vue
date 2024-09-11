<template>
  <div class="column">
    <h2>{{ column.name }}</h2>
    <div class="tasks" @drop="dropTask" @dragover.prevent>
      <Task
        v-for="task in column.tasks"
        :key="task.id"
        :task="task"
        draggable="true"
        @dragstart="dragStart(task)"
      />
    </div>
  </div>
</template>

<script setup>
import Task from './Task.vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  column: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['drag-task', 'drop-task']);

const dragStart = (task) => {
  emit('drag-task', task);
};

const dropTask = () => {
  emit('drop-task', props.column.name);
};
</script>

<style scoped>
.column {
  padding: 10px;
  width: 300px;
  background-color: #e2e2e2;
  margin-right: 10px;
  border-radius: 4px;
}
.tasks {
  min-height: 200px;
  border: 2px dashed #cccccc;
  border-radius: 4px;
  padding: 10px;
}
</style>
