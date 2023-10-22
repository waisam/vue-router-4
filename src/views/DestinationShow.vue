<script lang="ts" setup>
  import { destinations } from '@/data.json'
  // 组合式风格无法访问this.$route, 需要导入`useRoute`函数
  import { useRoute } from 'vue-router'

  // 选项式风格
  // export default {
  // computed: {
  //   destination(): any {
  //     return destinations.find(destination => destination.slug === this.$route.params.name)
  //   }
  // }
  // 第二种
  // data() {
  //   return {
  //     destination: destinations.find(destination => destination.slug === this.$route.params.name)
  //   }
  // }
  // }

  // 组合式风格
  const destination = destinations.find(destination => destination.slug === useRoute().params.name)
</script>

<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
