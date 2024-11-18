<script setup lang="ts">
	import { computed, ref } from 'vue';
	const inputValue = ref("");
	const imgActive = ref(false);

	const onInput = (event : any) => {
		console.log(event)
	};

	const onFocus = (event : any) => {
		imgActive.value = true;
	};
	const onBlur = (event : any) => {
		imgActive.value = false;
	};

	const activeClass = computed(() => imgActive.value ? "active" : "");
</script>

<template>
	<view class="demo6">
		<input class="input" type="text" placeholder="输入内容" v-model="inputValue" @input="onInput" @focus="onFocus"
			@blur="onBlur">
		<image class="pic" :class="activeClass" src="../../static/logo.png"></image>
	</view>
	<view>
		<text>预览：<text>{{inputValue}}</text></text>
	</view>
</template>

<style lang="scss" scoped>
	.demo6 {
		padding: 0 20px;
		margin-top: 40px;
	}

	.input {
		padding: 10px;
		border: 1px solid #ccc;
		position: relative;
		z-index: 10;
		background-color: #fff;
	}

	.pic {
		width: 24px;
		height: 24px;
		position: absolute;
		inset: 0 0 0 50%;
		transform: translateX(-50%);
		z-index: 1;
		transition: transform 0.5s;

		&.active {
			transform: translateX(-50%) translateY(-100%);
		}
	}
</style>