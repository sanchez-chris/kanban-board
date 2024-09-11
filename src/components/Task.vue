<template>
  <div class="task">
    {{ task.title }}
  </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
  
const props = defineProps({
    task: {
      type: Object,
      required: true
    }
});
</script>
  
<style scoped>
.task {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border-radius: 4px;
  cursor: pointer;
}
  </style>
  