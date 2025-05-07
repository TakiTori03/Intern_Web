export default {
  fetchUser: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: id,
          name: `User ${id}`,
          email: `user${id}@example.com`,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${id}`,
        })
      }, 1000)
    })
  },

  fetchBlog: (id) => {
    const blogPosts = [
      {
        id: 1,
        title: 'Getting Started with Vue.js',
        content: 'Vue.js is a progressive framework...',
        author: 'John Doe',
        date: '2024-01-15',
        tags: ['vuejs', 'javascript'],
      },
      {
        id: 2,
        title: 'Understanding the Composition API',
        content: 'The Composition API provides...',
        author: 'Jane Smith',
        date: '2024-01-20',
        tags: ['vuejs', 'composition-api'],
      },
      {
        id: 3,
        title: 'Vue Router Best Practices',
        content: 'When building SPAs with Vue...',
        author: 'Bob Johnson',
        date: '2024-01-25',
        tags: ['vuejs', 'router'],
      },
    ]

    return new Promise((resolve) => {
      setTimeout(() => {
        const post = blogPosts.find((post) => post.id === id)
        if (post) {
          resolve(post)
        } else {
          resolve(null)
        }
      }, 1000)
    })
  },
  fetchBlogs: () => {
    const blogPosts = [
      {
        id: 1,
        title: 'Getting Started with Vue.js',
        content: 'Vue.js is a progressive framework...',
        author: 'John Doe',
        date: '2024-01-15',
        tags: ['vuejs', 'javascript'],
      },
      {
        id: 2,
        title: 'Understanding the Composition API',
        content: 'The Composition API provides...',
        author: 'Jane Smith',
        date: '2024-01-20',
        tags: ['vuejs', 'composition-api'],
      },
      {
        id: 3,
        title: 'Vue Router Best Practices',
        content: 'When building SPAs with Vue...',
        author: 'Bob Johnson',
        date: '2024-01-25',
        tags: ['vuejs', 'router'],
      },
    ]
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogPosts)
      }, 1000)
    })
  },
}
