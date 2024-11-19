<script setup lang="ts">
</script>

<template>
    <view class="notice">
        <view class="left">
            <uni-icons type="sound-filled" color="var(--main-color)" size="24" />
            <text>公告</text>
        </view>
        <view class="center">
            <swiper autoplay circular interval="1500" duration="300" vertical>
                <swiper-item>
                    <navigator url="/pages/notice/detail" open-type="navigate" hover-class="navigator-hover">
                        <text>公告内容公告内容公告内容公告内容公告内容公告内容公告内容</text>
                    </navigator>
                </swiper-item>
            </swiper>
        </view>
        <view class="right">
            <uni-icons type="right" color="#ccc" size="16" />
        </view>
    </view>
</template>

<style scoped lang="scss">
.notice {
    display: flex;
    width: 690rpx;
    height: 80rpx;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 80rpx;
    padding: 0 15rpx;

    .left {
        width: 140rpx;
        display: flex;
        align-items: center;

        .text {
            color: var(--main-color);
            font-size: 16rpx;
            font-weight: 600;
            font-size: 28rpx;
        }
    }

    .center {
        flex: 1;

        swiper {
            height: 100%;

            &-item {
                height: 100%;
                font-size: 30rpx;
                color: #666;
                display: flex;
                align-items: center;

                text {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    .right {
        width: 70rpx;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>