<script lang="ts" setup>
	import { destinations } from '@/data.json'
</script>

<template>
	<div class="home">
		<div class="destinations">
			<!-- 使用`v-for`指令遍历出所有的路由链接 -->
			<router-link v-for="destination in destinations" :key="destination.id" :to="destination.slug">
				<h2>{{ destination.name }}</h2>
				<img :src="`/images/${destination.image}`" :alt="destination.name" />
			</router-link>
		</div>
	</div>
</template>
