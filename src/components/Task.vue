<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: Number,
  title: String,
  description:  String
});
</script>

<template>
  <div class="task">
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
  </style>
  