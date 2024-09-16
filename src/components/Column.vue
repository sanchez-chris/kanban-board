<script setup lang="ts">
import Task from './Task.vue';
import { defineProps, defineEmits } from 'vue';
import { type Task_Type  } from "../utils/types";

const props = defineProps({
  name: String,
  tasks: Array as () => Task_Type[]
});

const emit = defineEmits(['drag-task', 'drop-task']);

const dragStart = (task: Task_Type) => {
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
        :id="task.id"
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
  width:auto;
  background-color: #e2e2e2;
  border-radius: 4px;
}
.tasks {
  min-height: 200px;
  border: 2px #cccccc;
  border-radius: 4px;
  padding: 10px;
}

</style>
