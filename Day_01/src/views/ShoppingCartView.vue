<template>
  <div class="shopping-cart">
    <h1>Shopping Cart</h1>

    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>quantity</th>
      </tr>

      <tr v-for="item in cartItems" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </table>
    <p>Total price: {{ totalPrice }}</p>
    <p v-if="hasDiscount">You have a discount!</p>
    <p v-else>You don't have a discount.</p>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid white;
  border-collapse: collapse;
}

table {
  width: 100%;
}
</style>

<script>
export default {
  name: 'ShoppingCar',
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
        { id: 2, name: 'Smartphone', price: 800, quantity: 2 },
        { id: 3, name: 'Tablet', price: 600, quantity: 1 },
        { id: 4, name: 'Headphones', price: 200, quantity: 2 },
        { id: 5, name: 'Smartwatch', price: 300, quantity: 1 },
      ],
    }
  },

  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
    hasDiscount() {
      return (
        this.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity
        }, 0) > 1000
      )
    },
  },
}
</script>
