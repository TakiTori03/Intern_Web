<script>
import MessagesTab from '@/components/tab/MessagesTab.vue'
import NotificationsTab from '@/components/tab/NotificationsTab.vue'
import ProfileTab from '@/components/tab/ProfileTab.vue'
import SettingsTab from '@/components/tab/SettingsTab.vue'

export default {
  components: {
    MessagesTab,
    NotificationsTab,
    SettingsTab,
    ProfileTab,
  },

  data() {
    return {
      currentTab: 'ProfileTab',
      tabs: ['MessagesTab', 'NotificationsTab', 'SettingsTab', 'ProfileTab'],
    }
  },
}
</script>

<template>
  <div class="nav">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
  </div>
</template>

<style scoped>
.nav {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
