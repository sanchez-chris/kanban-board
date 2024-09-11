<script setup>
import Task from './Task.vue';
import { defineProps, defineEmits, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  name: String,
  tasks: Array
});

const emit = defineEmits(['drag-task', 'drop-task']);

const dragStart = (task) => {
  emit('drag-task', task);
};

const dropTask = () => {
  emit('drop-task', props.name);
};
</script>

<template>
  <div class="column">
    <h2>{{ props.name }}</h2>
    <div class="tasks" @drop="dropTask" @dragover.prevent>
      <Task
        v-for="task in props.tasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        draggable="true"
        @dragstart="dragStart(task)"
      />
    </div>
   
  </div>
</template>

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
  border: 2px #cccccc;
  border-radius: 4px;
  padding: 10px;
}

</style>
