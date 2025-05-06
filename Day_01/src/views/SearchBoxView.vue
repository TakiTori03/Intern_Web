<template>
  <div class="search-box">
    <input type="text" v-model="input" placeholder="Search data..." />

    <div class="item data" v-for="data in filterData" :key="data">
      <div>{{ data }}</div>
    </div>
    <div class="item error" v-if="input && !filterData.length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<style scoped>
.search-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
input {
  display: block;
  width: 350px;
  height: 40px;
  margin: 10px 20px;
  padding: 10px 20px;
  background: white no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;

  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.data {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>

<script>
import _ from 'lodash'

export default {
  name: 'SearchBox',
  data() {
    return {
      isLoading: false,
      filterData: [],
      input: '',
      mockData: [
        'Apple iPhone 15',
        'Samsung Galaxy S24',
        'Google Pixel 8',
        'OnePlus 11',
        'Sony Xperia 1',
        'Xiaomi Mi 13',
        'Oppo Find X6',
        'Huawei P60',
        'Realme GT3',
        'Vivo X90',
        'Honor Magic5',
        'Asus ROG Phone 7',
      ],
    }
  },
  watch: {
    input() {
      this.filterList()
    },
  },
  methods: {
    wrapFilterList() {
      this.loading = true
      this.filterList
    },
    filterList: _.debounce(function () {
      this.filterData = this.mockData.filter((data) => {
        const result = data.toLowerCase().includes(this.input.toLowerCase()) && this.input !== ''
        this.isLoading = false
        return result
      })
    }, 500),
    created() {
      this.filterData = this.mockData
    },
  },
}
</script>
