<script setup lang="ts">

</script>

<template>
	<view class="detail">
		<view class="title-box">
			<view class="tag">
				<uni-tag text="置顶" size="normal" type="error" @click="" />
			</view>
			<view class="title">这个区域写标题</view>
		</view>
		<view class="info">
			<view class="item">作者</view>
			<view class="date">
				<uni-dateformat :date="Date.now()" :threshold="[0, 0]" format="yyyy/MM/dd hh:mm:ss" />
			</view>
		</view>
		<view class=" content">
			<view>内容区域</view>
		</view>
	</view>
</template>

<style lang="scss" scoped></style>
