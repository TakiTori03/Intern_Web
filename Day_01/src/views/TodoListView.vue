<template>
  <div class="to-do">
    <h1>My Todo App!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '../components/todo/TodoList.vue'
export default {
  name: 'TodoListView',
  components: {
    TodoList,
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
