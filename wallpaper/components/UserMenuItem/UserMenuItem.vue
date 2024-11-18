<script setup lang="ts">
interface Props {
    title?: string;
    icon?: string;
    count?: number;
    url?: string;
}
const { title = "title", icon = "icon", count = "", url = "" } = defineProps<Props>();

const onClickGoTo = (event) => {
    console.log(url)
    if (url) {
        uni.navigateTo({ url });
    }
};
</script>

<template>
    <view class="user-menu-item" @click="onClickGoTo">
        <view class="left">
            <uni-icons :type="icon" color="var(--main-color)" size="20" />
            <view class="title">
                <text class="text">{{ title }}</text>
            </view>
        </view>
        <view class="right">
            <text class="count">{{ count }}</text>
            <text class="text">{{ '>' }}</text>
        </view>
    </view>
</template>

<style scoped lang="scss">
.user-menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx 15rpx;
    border-bottom: 1px solid #eee;

    &:active {
        background-color: #efefef70;
    }

    &:last-child {
        border-bottom: none;
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: center;

        .title {
            margin-left: 10rpx;
            color: #666;
        }
    }

    .right {
        color: #999;

        .count {
            padding-right: 10rpx;
        }

        .text {
            font-weight: bold;
        }
    }
}
</style>