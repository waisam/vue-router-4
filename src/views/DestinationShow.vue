<script lang="ts" setup>
  // 组合式风格无法访问this.$route, 需要导入`useRoute`函数
  import { useRoute } from 'vue-router'

  // 监听路由参数变量
  import { ref, watch } from 'vue'

  const route = useRoute()
  const destination: any = ref(null)

  // 监听路由参数的变化
  watch(
    () => route.params.name, // 无法直接使用属性作为监听对象，需要将其以getter函数返回值的形式提供给watch
    async (newValue, oldValue) => {
      console.info('Goodbye ' + oldValue)
      // 用变化后的新值组成新的请求路径或作为新的请求参数
      // let response = await fetch(`https://travel-dummy-api.netlify.app/${newValue}`)
      let response = await fetch(`http://localhost:5173/data/${newValue}.json`) // 远程数据调用效率太低,用本地数据替换
      destination.value = await response.json()
    },
    { immediate: true } // 载入完成立即触发回调函数
  )
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
