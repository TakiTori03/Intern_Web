<template>
  <div class="blog-wraper">
    <h1>Blog Detai;</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div class="button-wraper">
      <button v-if="!loading && !error" @click="back">Back</button>
      <button v-if="!loading && !error" @click="refresh">Refresh</button>
      <button v-if="!loading && !error" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import api from '../api/api.js'
export default {
  data() {
    return {
      loading: false,
      user: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params.id,
      (newId) => this.fetchData(newId),
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true },
    )
  },
  methods: {
    async fetchData(id) {
      this.error = this.user = null
      this.loading = true

      try {
        // Fetch the data from the API
        this.user = await api.fetchBlog(id)
      } catch (err) {
        this.error = err.toString()
      } finally {
        this.loading = false
      }
    },
    refresh() {
      this.fetchData(this.$route.params.id)
    },
    back() {
      const backId = Number(this.$route.params.id) - 1

      this.$router.push(`/blogs/${backId}`)
    },

    next() {
      const nextId = Number(this.$route.params.id) + 1
      this.$router.push(`/blogs/${nextId}`)
    },
  },
}
</script>

<style scoped>
.card {
  color: white;
  background-color: #a8a5a5fd;
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(236, 232, 232, 0.938);
}

.container {
  padding: 2px 16px;
}
.user-wraper {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.loading {
  font-size: 20px;
  color: #f3efef;
}
.error {
  font-size: 20px;
  color: red;
}
.button-wraper {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
