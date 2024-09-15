import { ref } from 'vue';

export const newTaskTitle = ref('');
export const newTaskDescription = ref('');
export const tasks = ref([
  { id: "1", title: 'Task 1', description: 'Description' },
  { id: "2", title: 'Task 2', description: 'Description' },
]);

