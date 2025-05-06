<script>
export default {
  props: ['name', 'age', 'avatar'],
}
</script>
<template>
  <div class="user-card">
    <tr>
      <td>
        <slot></slot>
      </td>
      <td>
        <img :src="avatar" alt="User Avatar" class="avatar" />
      </td>
      <td>
        <h2>{{ name }}</h2>
        <p>Age: {{ age }}</p>
      </td>
      <td>
        <button @click="$emit('delete', name)">Delete</button>
      </td>
    </tr>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #ff1a1a;
}
button:focus {
  outline: none;
}
button:active {
  background-color: #e60000;
}
</style>
