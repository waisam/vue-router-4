<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import ExperienceCard from '@/components/ExperienceCard.vue'
  import GoBack from '@/components/TheGoBack.vue'

  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })

  const destination: any = ref(null)

  watch(
    () => props.name, // props参数的变化
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
    <GoBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section v-if="destination" class="experiences">
    <h2>{{ destination.name }}'s Experiences</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'ExperienceShow',
          params: { slug: experience.slug }
        }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
    <router-view />
  </section>
</template>
