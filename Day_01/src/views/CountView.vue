<template>
  <div>
    <h1>Count Button</h1>
    <p v-bind:class="{ negative: !isPositive }">{{ count }}</p>
    <button @click="hit" :disabled="isDisable">
      {{ isInCrease ? 'Increase' : 'Decrease' }}
    </button>

    <button @click="isInCrease = !isInCrease">
      {{ isInCrease ? 'Switch to Decrease' : 'Switch to Increase' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CountButton',
  data() {
    return {
      count: 0,
      threshold: 20,
      isInCrease: true,
      isPositive: true,
      isDisable: false,
    }
  },
  watch: {
    count() {
      if (Math.abs(this.count) >= this.threshold) {
        this.isDisable = true
      }
    },
  },

  methods: {
    hit() {
      //   if (this.isDisable) return
      if (this.isInCrease) {
        this.count++
      } else {
        this.count--
      }
      if (this.count >= 0) {
        this.isPositive = true
      } else if (this.count < 0) {
        this.isPositive = false
      }
    },
  },
}
</script>

<style scoped>
.negative {
  color: red;
}
</style>
