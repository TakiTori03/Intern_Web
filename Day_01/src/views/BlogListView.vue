<template>
  <div class="blogs-wraper">
    <h2>Fetch blogs</h2>

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div style="width: 100%; overflow: auto">
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
            <th>author</th>
            <th>date</th>
            <th>tags</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.content }}</td>
            <td>{{ blog.author }}</td>
            <td>{{ blog.date }}</td>
            <td>{{ blog.tags.join(', ') }}</td>
            <td>
              <button @click="redirect(blog.id)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'BlogListView',

  data() {
    return {
      loading: false,
      error: null,
      blogs: [],
    }
  },
  methods: {
    async fetchBlogs() {
      this.error = this.blogs = null
      this.loading = true

      try {
        // Fetch the data from the API
        this.blogs = await api.fetchBlogs()
      } catch (err) {
        this.error = err.toString()
      } finally {
        this.loading = false
      }
    },
    redirect(id) {
      this.$router.push(`/blogs/${id}`)
    },
  },
  async created() {
    this.fetchBlogs()
  },
}
</script>
