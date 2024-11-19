<script setup lang="ts">

</script>

<template>
	<view class="classify page-bg">
		<TopNavBar title="分类"></TopNavBar>
		<view class="content">
			<SubjectItem v-for="_item in 15"></SubjectItem>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.classify {
	.content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
}
</style>
