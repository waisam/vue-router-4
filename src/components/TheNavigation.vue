<script lang="ts" setup>
  // 导入data.json并解包获得destinations节点的数据
  import { destinations } from '@/data.json'
</script>

<template>
  <div id="nav">
    <!-- 为导航添加路由 -->
    <router-link class="logo" to="/">Vue-Router@4</router-link>
    <router-link
      v-for="destination in destinations"
      :to="{ name: 'DestinationShow', params: { name: destination.slug } }"
      >{{ destination.name }}</router-link
    >
  </div>
</template>

<style lang="css">
  #nav .active {
    color: #ffcc00;
    border-bottom: 2px solid #ff0000;
  }
</style>
