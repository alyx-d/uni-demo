<script setup lang="ts">
	interface Props {
		userInfo : UserInfo
	}
	interface UserInfo {
		username : string;
		avatar ?: string;
	}
	const props = withDefaults(defineProps<Props>(), {
		userInfo: () => {
			return { username: "匿名", avatar: "/static/logo.png" };
		}
	});
</script>

<template>
	<view class="user-info">
		<image :src="props.userInfo.avatar" class="user-image"></image>
		<view class="username"><text>{{props.userInfo.username}}</text></view>
		<slot>默认slot</slot>
	</view>
</template>

<style lang="scss">
	.user-info {
		width: 100%;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #eee;

		.user-image {
			width: 100px;
			height: 100px;
		}
	}
</style>