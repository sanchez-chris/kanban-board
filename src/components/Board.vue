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
  
  // Estado reactivo para las columnas y las tareas
  const columns = reactive([
    { name: "To Do", tasks: [{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }] },
    { name: "In Progress", tasks: [] },
    { name: "Done", tasks: [] }
  ]);
  
  let draggedTask = null;
  
  // Función para capturar la tarea arrastrada
  const dragTask = (task) => {
    draggedTask = task;
  };
  
  // Función para soltar la tarea en la nueva columna
  const dropTask = (columnName) => {
    if (!draggedTask) return;
  
    // Remover la tarea de la columna original
    columns.forEach(column => {
      column.tasks = column.tasks.filter(t => t.id !== draggedTask.id);
    });
  
    // Añadir la tarea a la nueva columna
    const targetColumn = columns.find(col => col.name === columnName);
    targetColumn.tasks.push(draggedTask);
  
    draggedTask = null;  // Reiniciar la tarea arrastrada
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
  