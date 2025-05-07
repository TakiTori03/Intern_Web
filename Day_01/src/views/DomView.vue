<template>
  <div>
    <h1>Lifecycle Hooks</h1>
    <button @click="activeDom = !activeDom">Create component</button>
    <div>
      <dom-access v-if="activeDom"></dom-access>
    </div>
  </div>
</template>

<script>
import DomAccess from '@/components/DomAccess.vue'
export default {
  components: {
    DomAccess,
  },
  data() {
    return {
      activeDom: false,
    }
  },
}
</script>

<style scoped>
div {
  color: white;
  border: solid rgb(138, 136, 136) 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 400px;
  background-color: lightgreen;
}
</style>
