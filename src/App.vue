<script setup lang="ts">
  import Navigation from '@/components/TheNavigation.vue'
</script>

<template>
  <Navigation />
  <div class="container">
    <!-- 路由映射的页面显示在此 -->
    <router-view />
  </div>
</template>
