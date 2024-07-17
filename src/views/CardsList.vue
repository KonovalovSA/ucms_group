<template>
  <div class="home">
    <h1>Список покемонов</h1>
    <p v-if="state.loader">Загрузка...</p>
    <p v-if="!state.error">{{state.error}}</p>
    <ul class="itemList">
      <router-link class="itemList-item" v-for="item in state.itemList" :key="item.id" :to="{ name: 'card', params: {name: item.name}}">{{ item.name }}</router-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
import store from '../store'
import { reactive, computed } from 'vue'

const state = reactive({
  itemList: computed(() => store.getters.getItemList),
  loader: computed(() => store.getters.getLoader),
  error: computed(() => store.getters.getError)
})
store.dispatch('takeItemOrItems', '')
</script>

<style lang="scss">
  .itemList {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;

    .itemList-item {
      width: 25%;
      height: 50px;
      border: 1px solid #7878ff;
      margin: 5px;
      align-content: center;
      text-decoration: none;
    }
    .itemList-item:hover {
      background-color: #7878ff;
      color: white;
      cursor: pointer;
    }
  }

</style>
