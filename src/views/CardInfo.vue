<template>
  <div>
    <p v-if="state.loader">Загрузка...</p>
    <p v-if="!state.error">{{state.error}}</p>
    <div v-if="!state.loader" class="card">
      <h1>{{props.name}}</h1>
      <img :src="state.item.sprites.back_default">
      <h4>Abilities:<span v-for="ability in state.item.abilities" :key="ability.ability.name">{{ ability.ability.name }}</span></h4>
      <h4>Base experience: {{ state.item.base_experience }}</h4>
      <h4>Height: {{ state.item.height }}</h4>
      <h4>Weight: {{ state.item.weight }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '../store'
import { defineProps, reactive, computed } from 'vue'

const props = defineProps({
  name: String
})

store.dispatch('takeItemOrItems', props.name)

const state = reactive({
  item: computed(() => store.getters.getItem),
  loader: computed(() => store.getters.getLoader),
  error: computed(() => store.getters.getError)
})
</script>

<style lang="scss">
.card {
  margin: auto;
  width: 500px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #0000001a;
  .listAbility {
    display: flex;
    justify-content: center;

    p {
      margin: 0 5px;
    }
  }
}

</style>
