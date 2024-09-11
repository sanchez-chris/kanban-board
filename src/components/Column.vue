<script setup>
import Task from './Task.vue';
import { defineProps, defineEmits, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const newTaskTitle = ref("");
const newTaskDescription = ref("");
const showMenuNewTask = ref(false);
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

const toggleMenuNewTask = () => {
  showMenuNewTask.value = !showMenuNewTask.value;
}

const addTask = () => {
  if(newTaskTitle.value != "" || newTaskDescription.value != "") {
    props.tasks.push({
    id: uuidv4(),
    title: newTaskTitle.value,
    description: newTaskDescription.value
  });
  }
  newTaskTitle.value = "";
  newTaskDescription.value = "";
}
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
    <div class="menu" v-if="showMenuNewTask">
      <button class="close-btn" @click="toggleMenuNewTask">x</button>
      <div class="menu-item">
        <input class="input-task" type="text" v-model="newTaskTitle" placeholder="Title" />
      </div>
      <div class="menu-item">
        <textarea class="input-task" type="text" v-model="newTaskDescription" placeholder="Description" />
      </div>
      <div class="menu-item">
        <button class="add-btn pushTask" @click="addTask">Add Task</button>
      </div>
    </div>
    <div>
      <button class="add-btn toggleMenu" v-if="!showMenuNewTask" @click="toggleMenuNewTask">Add Task</button>
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

.menu {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-item {
  margin-bottom: 15px;
}

.input-task {
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.add-btn {
  color: black;
  padding: 12px 20px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.toggleMenu {
  background-color: #f9f9f9;
}

.pushTask {
  background-color: #e2e2e2;

}

.add-btn:hover {
  border: 1px solid black;
}

.close-btn {
  background-color: #e2e2e2;
  color: black;
  border-radius: 8px;
  font-size: 16px;
  width: 30px;
  height: 30px;
  align-self: flex-end;
  margin-bottom: 12px;
}

.close-btn:hover {
  border: 1px solid black;
}
</style>
