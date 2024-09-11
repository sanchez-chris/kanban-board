<template>
    <div class="board">
      <div class="columns">
        <Column
          v-for="column in columns"
          :key="column.name"
          :column="column"
          @drag-task="dragTask"
          @drop-task="dropTask"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import Column from './Column.vue';
  import { reactive, watch, onMounted } from 'vue';
  
  const columns = reactive([
    { name: "To Do", tasks: [{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }] },
    { name: "In Progress", tasks: [] },
    { name: "Done", tasks: [] }
  ]);
  
  let draggedTask = null;
  
  const dragTask = (task) => {
    draggedTask = task;
  };
  
  const dropTask = (columnName) => {
    if (!draggedTask) return;
  
    columns.forEach(column => {
      column.tasks = column.tasks.filter(t => t.id !== draggedTask.id);
    });
  
    const targetColumn = columns.find(col => col.name === columnName);
    targetColumn.tasks.push(draggedTask);
  
    draggedTask = null; 
  };
  
  onMounted(() => {
  const savedColumns = localStorage.getItem('kanban-columns');
  if (savedColumns) {
    columns.value = JSON.parse(savedColumns);
  }
    });

    watch(columns, (newColumns) => {
    localStorage.setItem('kanban-columns', JSON.stringify(newColumns));
    }, { deep: true });
    </script>
  
  <style scoped>
  .board {
    display: flex;
    justify-content: space-between;
  }
  .columns {
    display: flex;
  }
  </style>
  