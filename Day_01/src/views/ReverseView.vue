<template>
  <div class="reverse">
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">Reverse</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello VueJs')

function reverseMessage() {
  message.value = message.value.split('').reverse().join('')
}
</script>
