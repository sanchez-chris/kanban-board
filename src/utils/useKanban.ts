import { ref } from 'vue';

const newTaskTitle = ref('');
const newTaskDescription = ref('');
const tasks = ref([
  { id: 1, title: 'Task 1', description: 'Description' },
  { id: 2, title: 'Task 2', description: 'Description' },
]);

export {
  tasks,
  newTaskDescription,
  newTaskTitle,
};
