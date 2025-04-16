<template>
  <div class="card">
    <h2>我是Home组件</h2>
    <button type="button" @click="count1++">count is {{ count1 }}</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count1 = ref(0)
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
  }
</style>
