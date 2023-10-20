<script setup lang="ts">
	// 导入data.json并解包获得destinations节点的数据
	import { destinations } from '@/data.json'
</script>

<template>
	<div id="nav">
		<!-- 为导航添加路由 -->
		<router-link to="/">Home</router-link>
		<router-link v-for="destination in destinations" :to="`/${destination.slug}`">{{
			destination.name
		}}</router-link>
		<router-link to="/about">About</router-link>
	</div>

	<div class="container">
		<!-- 路由映射的页面显示在此 -->
		<router-view />
	</div>
</template>
