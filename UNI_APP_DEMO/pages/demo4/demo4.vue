<script setup lang="ts">
	import {onLoad, onShow, onReady, onHide, onUnload, onPageScroll, onReachBottom} from "@dcloudio/uni-app";
	import { onMounted, onUnmounted, ref } from "vue";
	
	const name = ref("");
	const age = ref("");
	
	onLoad((query) => {
		name.value = query.name;
		age.value = query.age; 
		console.log(query);
		console.log("on load")
	});
	
	onShow(() => {
		console.log("on show")
	});
	
	onReady(() => {
		console.log("on ready");
	});
	
	onHide(()=> {
		console.log("on hide")
	});
	
	onMounted(() => {
		console.log("on mounted")
	});
	
	onUnmounted(() => {
		console.log("on unmounted")
	});
	
	onUnload(() => {
		console.log("on unload");
	});
	
	const scrollShow = ref(false);
	onPageScroll((event) => {
		scrollShow.value = event.scrollTop > 200;
	});
	
	onReachBottom(() => {
		console.log("reach bottom");
	});
</script>

<template>
	<view class="demo4">
		<view>name: {{name}}</view>
		<view>age: {{age}}</view>
		<view v-for="item in 100">index:{{item}}</view>
		<view v-if="scrollShow" class="scroll-top"></view>
	</view>
</template>

<style lang="scss" scoped>
	
	.demo4 {
		color: var(--custom-color);
	}
.scroll-top {
	position: fixed;
	inset: auto 30px 30px auto;
	width: 50px;
	height: 50px;
	background-color: orange;
}
</style>
