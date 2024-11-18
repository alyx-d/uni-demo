<script setup lang="ts">



</script>

<template>
	<view class="classify">
		<SubjectItem v-for="item in 15"></SubjectItem>
	</view>
</template>

<style lang="scss" scoped>
	.classify {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>
