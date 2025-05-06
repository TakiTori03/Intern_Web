<template>
  <li>
    {{ todo.text }}
    <span v-if="todo.priority === 'high'" style="color: red">[High]</span>
    <span v-else-if="todo.priority === 'medium'" style="color: yellow">[Medium]</span>
    <span v-else-if="todo.priority === 'low'" style="color: green">[Low]</span>
    <div class="todo-item-actions">
      <button @click="$emit('remove', todo.id)">X</button>
      <span v-if="todo.completed" style="background-color: green">Đã hoàn thành</span>
      <button v-else @click="$emit('toggle', todo.id)">Chưa hoàn thành</button>
    </div>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
}

.todo-item-actions {
  display: flex;
  gap: 10px;
}

button {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
}
</script>
