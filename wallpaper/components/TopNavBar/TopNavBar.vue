<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
	title: string;
}

const { title } = defineProps<Props>();

const system = uni.getSystemInfoSync();
const statusBarHeight = system.statusBarHeight!;

// #ifdef MP-WEIXIN
const { top, height } = uni.getMenuButtonBoundingClientRect();
var titleBarHeight = ref(height + (top - statusBarHeight) * 2);
// #endif

// #ifdef APP
var titleBarHeight = ref(statusBarHeight);
// #endif

// #ifdef H5
var titleBarHeight = ref(0);
const titleBar = ref<any>(null);
onMounted(() => {
	const el = titleBar.value!.$el as HTMLElement;
	titleBarHeight.value = el.getBoundingClientRect().height + 30;
	el.style.padding = "30px";
});
// #endif
</script>

<template>
	<view class="top-nav-bar">
		<view class="content">
			<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
			<view ref="titleBar" class="title-bar" :style="{
				height: titleBarHeight > 0 ?
					titleBarHeight + 'px' : 'auto'
			}">
				<view class="title">{{ title }}</view>
				<view class="search">
					<uni-icons type="search" color="#999" size="18" />
					<input placeholder="搜索" placeholder-class="input-placeholder" />
				</view>
			</view>
		</view>
		<view class="fill" :style="{ height: statusBarHeight + titleBarHeight + 'px' }"></view>
	</view>
</template>

<style lang="scss" scoped>
.top-nav-bar {
	.content {
		background: linear-gradient(to bottom, transparent, white 400rpx),
			linear-gradient(to right, var(--bg-color), var(--second-color));
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;

		.title-bar {
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			.title {
				color: var(--text-color-1);
				font-size: 38rpx;
				font-weight: bold;
			}

			.search {
				width: 220rpx;
				height: 50rpx;
				display: flex;
				align-items: center;
				padding: 0 10rpx;
				border: 1px solid #fff;
				border-radius: 60rpx;
				background-color: #ffffff10;
				margin-left: 10rpx;
				color: #999;
				margin-left: 20rpx;

				.input-placeholder {
					color: var(--text-color-2);
					font-size: 20rpx;
					padding-left: 10rpx;
				}
			}
		}
	}
}
</style>