<script setup lang="ts">

</script>
<template>
	<view>
		<view><text>demo1 page</text></view>
		<swiper class="img-swiper" circular="true" vertical="true" indicator-dots="true" indicator-color="white"
			indicator-active-color="red" autoplay="true" interval="2000">
			<swiper-item class="img-swiper-item" v-for="item in 7">
				<navigator url="/pages/demo2/demo2">
					<image class="image" mode="aspectFill" :src="`/static/imgs/img-${item}.avif`"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss">
	.img-swiper {
		width: 100vw;
		height: 300px;


		.img-swiper-item {
			background-color: orange;

			navigator {
				width: 100%;
				height: 100%;
			}

			.image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>