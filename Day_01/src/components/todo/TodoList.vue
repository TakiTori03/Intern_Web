<template>
  <div class="todo-list">
    <input type="text" class="input" v-model="newTodoText" @keyup.enter.prevent="addTodo" />

    <ul v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
        @toggle="toggle"
      />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

let nextTodoId = 5

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        { id: 1, text: 'Complete Vue.js tutorial', completed: false, priority: 'high' },
        { id: 2, text: 'Build portfolio website', completed: true, priority: 'medium' },
        { id: 3, text: 'Learn Vuex', completed: false, priority: 'low' },
        { id: 4, text: 'Master Vue Router', completed: false, priority: 'high' },
      ],
    }
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
          completed: false,
          priority: 'medium',
        })
        this.newTodoText = ''
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove
      })
    },
    toggle(idToToggle) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === idToToggle) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    },
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #00c185;
  margin-bottom: 20px;
}
ul {
  height: 300px;
  overflow-y: auto;
}
</style>
