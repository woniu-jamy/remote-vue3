<template>
  <div class="card">
    <h2>我是hello组件</h2>
    <button type="button" @click="count1++">count is {{ count1 }}</button>
    <button type="button" @click="count2++">count is {{ count2 }}</button>
    <button type="button" @click="count3++">count is {{ count3 }}</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count1 = ref(0)
  const count2 = ref(0)
  const count3 = ref(0)
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
  }
</style>
