<script lang="ts" setup>
  import { ref } from 'vue'
  const props = defineProps({
    dest: { type: String, required: true },
    slug: { type: String, required: true }
  })
  const experience = ref(null)
  fetch(`http://localhost:5173/data/${props.dest}.json`, {
    method: 'POST',
    headers: {
      Authorization: 'authOne'
    }
  })
    .then(response => response.json())
    .then(destination => destination.experiences)
    .then((experiences: Array<any>) => experiences.find(exp => exp.slug === props.slug))
    .then(data => (experience.value = data))
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
