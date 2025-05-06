<template>
  <div class="compare">
    <h1>Compare Method and Computed</h1>
    <h4>Select category</h4>
    <select v-model="category">
      <option disabled value="">Please select one</option>
      <option>Electronics</option>
      <option>Clothing</option>
      <option>Books</option>
      <option>Home</option>
    </select>
    <hr />
    <hr />
    <h2>Method Filter Time: {{ methodTime }} ms</h2>
    <h2>Computed Filter Time: {{ computedTime }} ms</h2>
    <!-- <ul>
      <li v-for="item in filterByComputed" :key="item.id">
        {{ item.name }} - {{ item.price }} - {{ item.category }}
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: 'CompareView',
  data() {
    return {
      methodTime: 0,
      computedTime: 0,
      category: '',
      data: [],
    }
  },

  computed: {
    filterByComputed() {
      const result = this.data.filter((item) => {
        return item.category === this.category
      })

      return result
    },
  },

  created() {
    this.data = this.generateLargeDataset()
  },

  methods: {
    filterByMethod() {
      const result = this.data.filter((item) => {
        return item.category === this.category
      })

      return result
    },
    generateLargeDataset() {
      const items = []
      for (let i = 1; i <= 1000; i++) {
        items.push({
          id: i,
          name: `Product ${i}`,
          price: Math.floor(Math.random() * 1000) + 100,
          category: ['Electronics', 'Clothing', 'Books', 'Home'][Math.floor(Math.random() * 4)],
        })
      }
      return items
    },
  },
  watch: {
    category() {
      const startMethod = performance.now()
      this.filterByMethod()
      const endMethod = performance.now()
      this.methodTime = endMethod - startMethod

      const startComputed = performance.now()
      this.filterByComputed // access it to trigger computation
      const endComputed = performance.now()
      this.computedTime = endComputed - startComputed
    },
  },
}
</script>
