<script setup lang="ts">

</script>

<template>
	<view class="classlist page-bg">
		<view class="content">
			<navigator class="item" url="/pages/preview/preview" open-type="navigate" hover-class="navigator-hover"
				v-for="item in 10" :key="item">
				<image class="image" src="/static/images/preview2.jpg" mode="asspectFill" />
			</navigator>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.classlist {
	.content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rpx;
		padding: 5rpx;

		.item {
			height: 440rpx;

			.image {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}
</style>
