<template>
  <div class="login-form">
    <h2>Đăng ký</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Username:</label>
        <input type="text" v-model="username" />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" v-model="password" id="password" />
        <input class="toggle" type="checkbox" @click="toggle" />
        Show Password
      </div>

      <button type="submit">Đăng Nhập</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      validUsers: {
        username: 'admin',
        password: '123456',
      },
    }
  },

  methods: {
    toggle() {
      var x = document.getElementById('password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    handleSubmit() {
      console.log(this.username, this.password)
      if (
        this.username !== this.validUsers.username ||
        this.password !== this.validUsers.password
      ) {
        alert('Tên đăng nhập hoặc mât khẩu không đúng')
        return
      }

      alert(`Welcome`)
    },
  },
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
}
input {
  width: 100%;
  padding: 6px;
  margin-bottom: 10px;
}
input.toggle {
  width: auto;
}
</style>
