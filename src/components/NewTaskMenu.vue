<script setup lang="ts">
import { tasks, newTaskTitle, newTaskDescription } from "../utils/useKanban"
import { v4 as uuidv4 } from 'uuid';

const addTask = () => {
  if(newTaskTitle.value != "") {
    tasks.value.push({
    id: uuidv4(),
    title: newTaskTitle.value,
    description: newTaskDescription.value
    });
    newTaskTitle.value = "";
    newTaskDescription.value = "";
  }
};
</script>
<template>
    <div class="menu">
         <div class="menu-item">
           <input class="input-task" type="text" v-model="newTaskTitle" placeholder="Title (mandatory)" />
         </div>
         <div class="menu-item">
           <textarea class="input-task" type="text" v-model="newTaskDescription" placeholder="Description (optional)"></textarea>
         </div>
         <div>
           <button class="add-btn" @click="addTask()">Add Task</button>
         </div>
       </div>
</template>
<style>
.menu {
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
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
</style>