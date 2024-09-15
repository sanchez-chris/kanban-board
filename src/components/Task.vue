<script setup lang="ts">
import { defineProps } from 'vue';
import closeIcon from "../images/close.png"; 
import { tasks } from "../utils/useKanban"


const props = defineProps({
  id: String,
  title: String,
  description:  String
});

const deleteTask = (id: String | undefined) => {
  const index = tasks.value.findIndex(task => task.id === id);
  
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
}
</script>

<template>
  <div class="task">
    <div class="delete-button-container">
      <button class="delete-button" @click="deleteTask(props.id)"> 
        <img :src="closeIcon" alt="close" class="close-icon" />
      </button>
    </div>
    <h4>{{ props.title }}</h4> 
    <p>{{ props.description }}</p>
  </div>
</template>
  
<style scoped>
.task {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button {
  background-color: #e2e2e2;
  color: black;
  height: 15px;
  width: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-icon {
  height: 10px;
  width: 10px;
}

.delete-button:hover {
  border: 1px solid black;
}

.delete-button-container {
  display: flex;
  justify-content: end;
}
  </style>
  