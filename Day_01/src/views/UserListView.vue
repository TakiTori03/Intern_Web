<template>
  <div class="users-wraper">
    <h2>Fetch {{ ids.length }} Users</h2>

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div style="width: 100%; height: 70vh; overflow: auto">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td><img :src="user.avatar" alt="avatar" /></td>
            <td>
              <button @click="redirect(user.id)">Detail</button>
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
  name: 'UsersView',

  data() {
    return {
      loading: false,
      error: null,
      users: [],
      ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  methods: {
    async fetchUsers(ids = []) {
      if (!Array.isArray(ids) || ids.length === 0) return []

      this.error = this.users = null
      this.loading = true

      const uniqueIds = [...new Set(ids)]
      try {
        const userPromises = uniqueIds.map((id) => api.fetchUser(id))
        const users = await Promise.all(userPromises)
        this.users = users
      } catch (err) {
        this.error = err.toString()
      } finally {
        this.loading = false
      }
    },
    redirect(id) {
      this.$router.push(`/users/${id}`)
    },
  },
  async created() {
    this.fetchUsers(this.ids)
  },
}
</script>
