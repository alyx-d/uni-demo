<script setup lang="ts">
</script>

<template>
    <view class="sub-title">
        <view class="title">
            <text>
                <slot name="title">title</slot>
            </text>
        </view>
        <view class="custome">
            <slot name="default">default</slot>
        </view>
    </view>
</template>

<style scoped lang="scss">
.sub-title {
    margin: 20rpx 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;

    text {
        font-size: 40rpx;
        font-weight: bold;
    }
}
</style>