<template>
  <div class="register-form">
    <h2>Đăng ký</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username:</label>
        <input type="text" v-model="username" />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>

      <button type="submit">Đăng ký</button>
    </form>

    <hr />

    <div>
      <h3>Preview:</h3>
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
    }
  },
  computed: {
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    },
  },
  methods: {
    handleSubmit() {
      if (!this.isValidEmail) {
        alert('Vui lòng nhập email hợp lệ.')
        return
      }

      alert(`Đăng ký thành công!\nUsername: ${this.username}\nEmail: ${this.email}`)
    },
  },
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
}
input {
  width: 100%;
  padding: 6px;
  margin-bottom: 10px;
}
</style>
