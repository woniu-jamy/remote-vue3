<!-- App.vue就是主页 -->
<template>
  <div>
    <HelloWorld></HelloWorld>
  </div>
  <div class="outer1">我是App组件的内容</div>
</template>

<script setup>
  import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
  .outer1 {
    width: 100px;
    height: 50px;
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
