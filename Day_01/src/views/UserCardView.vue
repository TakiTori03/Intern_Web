<script>
import UserCard from '../components/UserCard.vue'
export default {
  name: 'CardView',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'John Doe',
          age: 30,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 25,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        },
        {
          id: 3,
          name: 'Bob Johnson',
          age: 35,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
        },
      ],
    }
  },
  methods: {
    deleteUser(name) {
      this.users = this.users.filter((user) => user.name !== name)
    },
  },
}
</script>
<style scoped></style>
<template>
  <div class="user-cards">
    <h1>User Cards</h1>
    <div class="user-cards">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :age="user.age"
        :avatar="user.avatar"
        @delete="deleteUser"
      >
        {{ user.id }}</UserCard
      >
    </div>
  </div>
</template>
