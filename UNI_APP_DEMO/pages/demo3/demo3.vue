<script setup lang="ts">
import { ref } from 'vue';
	const count = ref(0);
	const layoutDemo = ref(null);
	
</script>

<template>
	<view class="demo3">
		<view>count: {{count}}</view>
		<button @click="() => layoutDemo.print()">click to print</button>
		<LayoutDemo ref="layoutDemo" :count="count" @update:count="(event) => {count++;}"></LayoutDemo>
	</view>
</template>

<style lang="scss" scoped>

</style>
