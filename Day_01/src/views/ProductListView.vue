<template>
  <div class="product-list">
    <h2>Product List</h2>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
    <h3>Total Price: {{ totalPrice }}</h3>
    <button @click="calTotalPrice">Cal total</button>
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

<script>
export default {
  name: 'ProductListView',
  data() {
    return {
      products: [
        { id: 1, name: 'iPhone 15', price: 999 },
        { id: 2, name: 'Samsung Galaxy S24', price: 899 },
        { id: 3, name: 'MacBook Pro', price: 1999 },
        { id: 4, name: 'iPad Air', price: 599 },
        { id: 5, name: 'AirPods Pro', price: 249 },
      ],
      totalPrice: 0,
    }
  },

  computed: {
    calTotalPrice() {
      this.totalPrice = this.products.reduce((total, product) => {
        return total + product.price
      }, 0)
    },
  },
}
</script>
