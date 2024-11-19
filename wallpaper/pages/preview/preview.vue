<script setup lang="ts">
import { ref } from 'vue';

const maskDisplay = ref(true);
const onClickMaskDisplay = (event: MouseEvent) => {
	maskDisplay.value = !maskDisplay.value;
};
const infoPopup = ref();
const onClickInfo = (event: MouseEvent) => {
	infoPopup.value.open();
};
const onClickCloseInfo = (event: MouseEvent) => {
	infoPopup.value.close();
};

const ratePopup = ref();
const rateValue = ref(0);
const onClickRate = (event: MouseEvent) => {
	ratePopup.value.open();
};
const onClickCloseRate = (event: MouseEvent) => {
	ratePopup.value.close();
};
const onClickConfirmRate = (event: MouseEvent) => {
	ratePopup.value.close();
};

const onClickGoBack = (event: MouseEvent) => {
	uni.navigateBack();
};
</script>

<template>
	<view class="preview">
		<swiper>
			<swiper-item v-for="item in 10" :key="item">
				<image @click="onClickMaskDisplay" src="/static/images/preview1.jpg" mode="asspectFill" />
			</swiper-item>
		</swiper>

		<view class="mask" v-if="maskDisplay">
			<view class="go-back" @click="onClickGoBack">
				<uni-icons type="back" color="#fff" size="24" />
			</view>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="Date.now()" :threshold="[0, 0]" format="hh:mm" />
			</view>
			<view class="date">
				<uni-dateformat :date="Date.now()" :threshold="[0, 0]" format="MM月dd日" />
			</view>
			<view class="footer">
				<view class="box" @click="onClickInfo">
					<uni-icons type="info" color="" size="28" />
					<view class="text">
						<text>信息</text>
					</view>
				</view>
				<view class="box" @click="onClickRate">
					<uni-icons type="star" color="" size="28" />
					<view class="text">
						<text>5分</text>
					</view>
				</view>
				<view class="box">
					<uni-icons type="download" color="" size="26" />
					<view class="text">
						<text>下载</text>
					</view>
				</view>
			</view>
		</view>

		<uni-popup ref="infoPopup" type="bottom">
			<view class="info-box">
				<view class="header">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="onClickCloseInfo">
						<uni-icons type="closeempty" color="#999" size="18" />
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text class="value" selectable="true">
								<text>{{ Math.random().toString(36).slice(2).repeat(2) }}</text>
							</text>
						</view>
						<view class="row">
							<view class="label">分类：</view>
							<view class="value classify">
								<text>{{ Math.random().toString(36).slice(2).repeat(2) }}</text>
							</view>
						</view>
						<view class="row">
							<view class="label">发布者：</view>
							<view class="value">
								<text>{{ Math.random().toString(36).slice(2).repeat(2) }}</text>
							</view>
						</view>
						<view class="row">
							<view class="label">评分：</view>
							<view class="value rate">
								<uni-rate :value="3.5" size="16" readonly touchable />
								<text>3.5分</text>
							</view>
						</view>
						<view class="row">
							<view class="label">摘要：</view>
							<view class="value">
								<text>{{ Math.random().toString(36).slice(2).repeat(30) }}</text>
							</view>
						</view>
						<view class="row">
							<view class="label">标签：</view>
							<view class="value tabs">
								<text class="tab" v-for="item in 5" :key="item">{{
									Math.random().toString(36).slice(2) }}</text>
							</view>
						</view>
						<view class="row">
							<view class="copyright">
								<text>本网站（或应用程序）使用的所有图片仅用于示范和说明用途。所有图片的版权归原作者或版权持有人所有。我们不主张对这些图片拥有版权或其它知识产权。
									如果您认为我们的图片使用侵犯了您的版权，请联系我们并提供相关证明文件。我们会立即采取必要措施，包括移除相关图片。
									联系我们： your.email@example.com
									我们对图片的使用尽量确保合法和适当，但不保证所有图片的版权归属正确无误。如果您发现任何图片有版权问题，请及时告知</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<uni-popup ref="ratePopup" type="center">
			<view class="rate-box">
				<view class="header">
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="onClickCloseRate">
						<uni-icons type="closeempty" color="#999" size="18" />
					</view>
				</view>
				<view class="content">
					<uni-rate allow-half v-model="rateValue" size="20" :margin="10" />
					<text class="text">{{ rateValue }}分</text>
				</view>

				<view class="footer">
					<button :disabled="!rateValue" size="mini" plain @click="onClickConfirmRate">确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
.preview {
	width: 100%;
	height: 100vh;
	position: relative;

	swiper {
		width: 100%;
		height: 100%;

		&-item {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}

	.mask {

		&>view {
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			width: fit-content;
		}

		.go-back {
			top: 6vh;
			background: #00000030;
			margin-left: 30rpx;
			width: 38px;
			height: 38px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			backdrop-filter: blur(10rpx);
		}

		.count {
			top: 10vh;
			background-color: rgba(0, 0, 0, 0.3);
			border-radius: 10rpx;
			color: #fff;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}

		.time {
			top: calc(10vh + 80rpx);
			color: #fff;
			font-size: 120rpx;
		}

		.date {
			top: calc(10vh + 240rpx);
			color: #fff;
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}

		.footer {
			bottom: 10vh;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 64vw;
			height: 120rpx;
			background: rgba(255, 255, 255, 0.8);
			border-radius: 60rpx;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.3);

			.box {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 2rpx 12rpx;

				.text {
					font-size: 28rpx;
					font-weight: bold;
				}
			}
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			color: #666;
		}

		.close {
			padding: 6rpx;
		}
	}

	.info-box {
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;

		scroll-view {
			max-height: 60vh;

			.content {
				margin: 0 10rpx;

				.row {
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7rem;

					.label {
						color: var(--text-color-3);
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}

					.value {
						flex: 1;
						width: 0;

						text {
							white-space: normal;
							word-break: break-all;
						}
					}

					.value.rate {
						display: flex;
						align-items: center;

						text {
							padding-left: 20rpx;
							font-size: 26rpx;
							color: var(--text-color-2);
						}
					}

					.value.tabs {
						display: flex;
						flex-wrap: wrap;

						.tab {
							border: 1px solid var(--main-color);
							color: var(--text-color-2);
							font-size: 22rpx;
							padding: 10rpx 20rpx;
							border-radius: 40rpx;
							line-height: 1rem;
							margin: 0 10rpx 10rpx 0;
						}
					}

					.value.classify {
						color: var(--main-color);
					}

					.copyright {
						color: var(--text-color-2);
						font-size: 26rpx;
						line-height: 1.2rem;
						padding: 15rpx;
						background: #efefef;
						border-radius: 20rpx;
					}
				}
			}
		}
	}

	.rate-box {
		width: 70vw;
		padding: 30rpx;
		border-radius: 20rpx;
		background: white;
		display: flex;
		flex-direction: column;

		.content {
			padding: 30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;

			.text {
				color: var(--rate-text-color);
				padding-left: 10rpx;
				width: 80rpx;
				text-align: right;
			}
		}

		.footer {
			padding: 10rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

	}
}
</style>
