<template>
  <h2>DOM Access</h2>
  <form @submit.prevent>
    <label>
      <p>
        Name: <br />
        <input type="text" ref="inpName" />
      </p>
    </label>
    <label>
      <p>
        Age: <br />
        <input type="number" />
      </p>
    </label>
    <button>Submit</button>
  </form>
  <p>(This form does not work, it is only here to show the mounted lifecycle hook.)</p>
</template>

<script>
export default {
  mounted() {
    this.$refs.inpName.focus()
  },
}
</script>

<style scoped></style>
