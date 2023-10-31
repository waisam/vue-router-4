<script lang="ts" setup>
  import { computed } from 'vue'
  import { destinations } from '@/data.json'
  const props = defineProps({
    name: { type: String, required: true },
    slug: { type: String, required: true }
  })
  const experience = computed(() =>
    destinations
      .find(dest => dest.slug === props.name)
      .experiences.find(exper => exper.slug === props.slug)
  )
</script>

<template>
  <section v-if="experience" class="experience">
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
