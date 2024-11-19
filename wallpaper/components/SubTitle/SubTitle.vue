<script setup lang="ts">
</script>

<template>
    <view class="sub-title">
        <view class="title">
            <slot name="title">title</slot>
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

    .title {
        height: 100%;
        font-size: 40rpx;
        font-weight: bold;
    }

}
</style>