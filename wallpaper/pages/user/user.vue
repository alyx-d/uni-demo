<script setup lang="ts">

</script>

<template>
	<view class="user">
		<view class="user-info">
			<view class="avatar">
				<image class="image" src="/static/xxm-logo.png" mode="aspectFill" />
			</view>
			<view class="ip">
				<text class="text">100.100.100.100</text>
			</view>
			<view class="address">
				<text class="text">来自于：山东</text>
			</view>
		</view>
		<view class="menu-group">
			<UserMenuItem title="我的收藏" icon="heart-filled" :count="12" url="0" v-for="item in 3" />
		</view>

		<view class="menu-group">
			<UserMenuItem title="我的收藏" icon="heart-filled" v-for="item in 3" />
		</view>
	</view>
</template>

<style lang="scss" scoped>
.user {
	.user-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50rpx 0;

		.avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;

			.image {
				width: 100%;
				height: 100%;
			}
		}

		.ip {
			padding: 10rpx 0;
			font-size: 44rpx;
			font-weight: bold;
			color: #333;
		}

		.address {
			color: #999;
			font-size: 28rpx;
		}
	}

	.menu-group {
		width: 690rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
		border: 1rpx solid #eee;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
	}
}
</style>
