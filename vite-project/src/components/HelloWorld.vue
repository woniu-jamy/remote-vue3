<template>
  <div class="card">
    <h2>我是hello组件</h2>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
  }
</style>
