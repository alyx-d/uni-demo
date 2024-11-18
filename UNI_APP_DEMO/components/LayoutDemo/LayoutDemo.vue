<script setup lang="ts">
	const props = defineProps<{
		count : number
	}>();
	const emit = defineEmits<{
		(e : "update:count", event : any) : void
	}>()
	const onClick = (event : any) => {
		emit("update:count", event)
	};
	
	const print = () => {
		console.log("print");
	};
	defineExpose<{
		print : () => void,
	}>({
		print,
	});
</script>

<template>
	<view class="layout">
		<view class="header">
			<slot name="header"></slot>
		</view>
		<view class="content">
			<slot name="content"></slot>
		</view>
		<view class="footer">
			<slot name="footer"></slot>
		</view>
		<button @click="onClick">count add</button>
	</view>
</template>


<style lang="scss" scoped>
	.layout {
		width: 100%;

		.header {
			height: 200px;
			background-color: #ccc;
		}

		.content {
			min-height: 200px;
		}

		.footer {
			height: 200px;
			background-color: orange;
		}
	}
</style>