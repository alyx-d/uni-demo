<script setup lang="ts">
const props = defineProps<{
    isMore?: boolean;
}>();
</script>

<template>
    <view class="subject-item">
        <view class="box" v-if="!props.isMore">
            <navigator url="/pages/classlist/classlist" open-type="navigate" hover-class="navigator-hover">
                <view class="top-tip">3天前更新</view>
                <view class="wrapper">
                    <image class="image" src="/static/images/classify1.jpg" mode="aspectFill" />
                </view>
                <view class="mask">明星美女</view>
            </navigator>
        </view>

        <view class="box more" v-if="props.isMore">
            <navigator url="/pages/classify/classify" open-type="reLaunch" hover-class="navigator-hover">
                <view class="wrapper">
                    <image class="image" src="/static/images/more.jpg" mode="aspectFill" />
                </view>
                <view class="mask">
                    <uni-icons type="more" color="#fff" size="24" />
                    <text class="text">更多</text>
                </view>
            </navigator>
        </view>
    </view>
</template>


<style scoped lang="scss">
.subject-item {

    .box {
        position: relative;

        .top-tip {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(250, 129, 90, 0.7);
            backdrop-filter: blur(20rpx);
            padding: 6rpx 14rpx;
            z-index: 10;
            color: #fff;
            border-radius: 0 0 20rpx 0;
            font-size: 22rpx;
        }

        .mask {
            position: absolute;
            width: 100%;
            height: 80rpx;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            backdrop-filter: blur(20rpx);
            font-weight: bold;
            border-radius: 10rpx;
        }

        .wrapper {
            height: 340rpx;

            .image {
                width: 100%;
                height: 100%;
                border-radius: 10rpx;
            }
        }
    }

    .box.more {

        .mask {
            width: 100%;
            height: 100%;
            flex-direction: column;
        }

        .text {
            font-size: 28rpx;
        }
    }
}
</style>