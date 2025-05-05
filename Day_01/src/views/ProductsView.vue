<template>
  <div class="product-list">
    <h2>Product List</h2>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
    <h3>Total Price: {{ totalPrice }}</h3>
    <button @click="totalPrice = products.reduce((acc, product) => acc + product.price, 0)">
      Calculate Total Price
    </button>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  margin-bottom: 10px;
}
table,
th,
td {
  border: 1px solid white;
  border-collapse: collapse;
}
</style>

<script setup>
import { ref } from 'vue'
const products = ref([
  { id: 1, name: 'iPhone 15', price: 999 },
  { id: 2, name: 'Samsung Galaxy S24', price: 899 },
  { id: 3, name: 'MacBook Pro', price: 1999 },
  { id: 4, name: 'iPad Air', price: 599 },
  { id: 5, name: 'AirPods Pro', price: 249 },
])

const totalPrice = ref(0)
</script>
