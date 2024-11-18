<script setup>
import { ref } from 'vue';
const color = ref("#fc359a");

const onClick = () => {
	const value = Math.random().toString().substring(3, 9)
	color.value = "#" + value;
};

const onChange = (event) => {
	console.log(event)
};
</script>
<template>
	<view>
		<view>
			<text>demo2</text>
		</view>
		<view>
			<button type="primary" disabled="true" size="default">按钮</button>
			<view>----</view>
			<input maxlength="25" type="text" confirm-type="done" placeholder="输入内容"/>
		</view>
		<view>----</view>
		<view>
			<view :style="{background: color}" @click="onClick">{{3 + 5}}</view>
		</view>
		<view>----</view>
		<switch @change="onChange"></switch>
		<view>----</view>
		<button type="primary">普通按钮</button>
	</view>
</template>



<style>

</style>