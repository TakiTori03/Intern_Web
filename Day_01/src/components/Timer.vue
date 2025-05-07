<script>
export default {
  name: 'timer-component',
  data() {
    return {
      time: 0,
      isRunning: false,
      interval: null,
      currentAchievement: '',
      achievements: [
        { time: 30, message: 'Đã được 30s' },
        { time: 60, message: 'Đã được 1 phút' },
        { time: 300, message: 'Đã được 5 phút' },
        { time: 1800, message: 'Đã được nửa tiếng' },
      ],
    }
  },
  computed: {
    formatTimer() {
      const hours = Math.floor(this.time / 3600)
      const minutes = Math.floor((this.time % 3600) / 60)
      const seconds = this.time % 60
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    },
  },
  watch: {
    time(newTime) {
      const achievement = this.achievements.find((a) => a.time === newTime)
      if (achievement) {
        this.currentAchievement = achievement.message
      }
    },
  },
  methods: {
    startTimer() {
      if (this.interval) clearInterval(this.interval)
      this.isRunning = true
      this.interval = setInterval(() => {
        if (this.isRunning) {
          this.time++
        }
      }, 1000)
    },
    pauseTimer() {
      clearInterval(this.interval)
      this.interval = null
      this.isRunning = false
    },
    resetTimer() {
      this.pauseTimer()
      this.time = 0
      this.currentAchievement = ''
    },
  },
  beforeUnmount() {
    clearInterval(this.interval)
    this.interval = null
    this.isRunning = false
  },
}
</script>

<template>
  <div class="timer">
    <h1>{{ formatTimer }}</h1>
    <p v-if="currentAchievement">{{ currentAchievement }}</p>
    <div class="button">
      <button @click="startTimer" :disabled="isRunning">Bắt đầu</button>
      <button @click="pauseTimer" :disabled="!isRunning">Tạm dừng</button>
      <button @click="resetTimer">Đặt lại</button>
    </div>
  </div>
</template>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.timer h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.timer p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
