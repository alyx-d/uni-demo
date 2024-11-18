<script setup lang="ts">
import { ref } from 'vue';
import {onLoad, onReachBottom} from "@dcloudio/uni-app";
import { request } from '../../common/ts/request';

const onClick = (event) => {
	uni.showToast({
		title: "success"
	});
};

const onClickLoading = (event) => {
	uni.showLoading({
		mask: true,
		title: "loading"
	})
	setTimeout(() => {
		uni.hideLoading();
	}, 1500);
};

const onClickModal = (event) => {
	uni.showModal({
		title:"是否删除",
		content: "确认删除",
		success: (event) => {
			console.log(event);
		}
	});
	console.log()
};

const pets = ref([]);
const req = async (type: "all" | "dog" | "cat" = "all") => {
	const data = await request<any>({
		url: "https://tea.qingnian8.com/tools/petShow",
		data: {
			size: 10,
			type,
		},
		method: "GET",
	});
	return data.data;
};

onLoad(async () => {
	pets.value = await req();
});


const onClickPreviewImage = (event: any, index: number) => {
	uni.previewImage({
		urls:pets.value.map(item => item.url),
		current:index,
		loop:true,
		indicator:'default',
	})
};

const segmentControll = ref({
	items: ["all", "dog", "cat"],
	current: 0,
	getItem: (): "all" | "dog" | "cat" => {
		return segmentControll.value.items[segmentControll.value.current] as any;
	},
	onItemClick: async (event: any) => {
		const index = event.currentIndex;
		segmentControll.value.current = index;
		const data = await req(segmentControll.value.getItem());
		pets.value = data;
	}
});

onReachBottom(async () => {
	pets.value.push(...(await req(segmentControll.value.getItem())));
});
</script>

<template>
	<view class="pup-box">
		<view class="text">
			<view>1231321</view>
			<view>1231321</view>
			<view>1231321</view>
			<view>1231321</view>
		</view>
	</view>
	<view class="layout" hover-class="hover-class" hover-stay-time="0">
		<view class="box">
			<text>view布局标签</text>
			<view class="inner">
				<text selectable="true">inner内容</text>
			</view>
		</view>
	</view>
	<view class="button-group">
		<button @click="onClick">点击Toast</button>
		<button @click="onClickLoading">loading</button>
		<button @click="onClickModal">Modal</button>
	</view>
	<navigator url="/pages/demo1/demo1">to demo1</navigator>
	<navigator url="/pages/demo4/demo4?name=123&age=20">to demo4</navigator>
	<navigator url="/pages/demo5/demo5">to demo5</navigator>
	<navigator url="/pages/demo6/demo6">to demo6</navigator>
	<navigator url="/pages/demo7/demo7">to demo7</navigator>
	<view>--------</view>
	<swiper class="swiper-view" circular="true" autoplay="true" vertical="true" interval="2000" indicator-dots="true" indicator-active-color="white">
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
		<swiper-item class="swiper-item">子元素</swiper-item>
	</swiper>
	<view class="container">
		<view class="menu">
			<uni-segmented-control :current="segmentControll.current"
			:values="segmentControll.items"
			@clickItem="segmentControll.onItemClick"></uni-segmented-control>
		</view>
		<view class="row" v-for="(item, index) in pets" :key="item.id">
			<view class="image-wapper" @click="onClickPreviewImage($event, index)">
				<image lazy-load="true" class="image" mode="widthFix" :src="item.url"/>
			</view>
			<view class="content">{{item.content}}</view>
			<view class="author">—— {{item.author}}</view>
		</view>
		<view class="load-more">
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>


<style lang="scss">
	.layout {
		width: 200px;
		height: 200px;
		background-color: #ccc;
	}

	.hover-class {
		background-color: orange;
	}
	
	.swiper-view {
		width: 100vw;
		height: 200px;
		border: 1px solid green;
		
			.swiper-item {
				background-color: orange;
				
				&:nth-child(2n) {
					background-color: pink;
				}
			}
	}
	
	.pup-box {
		position: fixed;
		bottom: calc(50px);
		z-index: 100;
		width: 100%;
		background: green;
		display: grid;
		grid-template-rows: 1fr 0fr;
		overflow: hidden;
		transition: .3s;
		display: none;
		
		&:hover {
			grid-template-rows: 0fr 1fr;
		}
		.text {
			min-height: 0;
		}
	}
	
	
	
	.container {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.menu {
			width: 100%;
			padding: 0 0 20px;
		}
		
		.row {
			width: 100%;
			margin-bottom: 30px;
			border-radius: 15px;
			box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
			
			.image-wapper {
				width: 100%;
				
				.image {
					width: 100%;
				}
			}
			
			.content {
				padding: 10px;
				color: #333;
			}
			
			.author {
				padding: 0 15px 15px;
				color: #888;
				font-size: 12px;
				text-align: right;
			}
		}
		
		.load-more {
			padding: 10px 0;
		}
	}
</style>