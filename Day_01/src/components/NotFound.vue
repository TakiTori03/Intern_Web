<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to="/">Go back to home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
.not-found h1 {
  font-size: 5rem;
  margin-bottom: 20px;
}
.not-found p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.not-found a {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
}
.not-found a:hover {
  text-decoration: underline;
}
</style>
