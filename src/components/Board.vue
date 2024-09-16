
  <script setup lang="ts">
  import Column from './Column.vue';
  import NewTaskMenu from './NewTaskMenu.vue';
  import { tasks } from "../utils/useKanban"
  import { type Task_Type  } from "../utils/types"
  import { ref, watch, onMounted } from 'vue';

  const columns = ref([
    { name: "To Do", tasks: tasks.value },
    { name: "In Progress", tasks: [] },
    { name: "Done", tasks: [] }
  ]);
  
  let draggedTask: Task_Type  | null = null;
  
  const dragTask = (task: Task_Type ) => {
    draggedTask = task;
  };
  
  const dropTask = (columnName: String) => {
    if (!draggedTask) return;
  
    columns.value.forEach(column => {
      column.tasks = column.tasks.filter(t => t.id !== draggedTask?.id);
    });
  
    const targetColumn = columns.value.find(col => col.name === columnName);
    targetColumn?.tasks.push(draggedTask);
  
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

<template>
  <div class="container">
    <div class="box-1">
     <h2>Kanban Board</h2>
     <p class="intro-text">In the menu on the right, you can add new tasks. You can organize them into different columns using drag and drop.</p>
    </div>
    <div class="box-2">
      <NewTaskMenu />
    </div>
   
  </div>

  <div class="board">
    <div class="columns">
      <Column
        v-for="column in columns"
        class="column"
        :key="column.name"
        :name="column.name"
        :tasks="column.tasks"
        @drag-task="dragTask"
        @drop-task="dropTask"
      />
    </div>
  </div>
</template>

  
  <style scoped>
  .board {
    width: 100%;
    display: flex;
    justify-content: space-between;
    justify-content: space-between;
  }
  .columns {
    flex: 1; /* Cada columna ocupará el mismo espacio disponible */
    display: flex;
 
  }
  .column {
    flex: 1;
    box-sizing: border-box;
    margin-left: 10px;
  }

  .column:first-child {
  margin-left: 0; /* El primer elemento no tiene margen izquierdo */
  }

  .container {
    display: flex;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 14px;
    align-items: center;
  }

.box-1 {
  width: 33%;
}

.box-2 {
  width: 66%
}

.intro-text {
  padding: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
}
  </style>
  