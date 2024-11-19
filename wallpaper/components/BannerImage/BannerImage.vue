<script setup lang="ts">

</script>

<template>
    <view class="banner-image">
        <swiper class="swiper" indicator-dots autoplay interval="5000" circular indicator-color="#fff">
            <swiper-item class="swiper-item" v-for="(item) in 3" :key="item">
                <image :src="`/static/images/banner${item}.jpg`" mode="asspectFill" class="banner-image-item" />
            </swiper-item>
        </swiper>
    </view>
</template>

<style scoped lang="scss">
.banner-image {
    width: 750rpx;
    padding: 30rpx 0;

    .swiper {
        width: 750rpx;
        height: 340rpx;

        &-item {
            width: 100%;
            height: 100%;
            padding: 0 30rpx;

            .banner-image-item {
                width: 100%;
                height: 100%;
                border-radius: 10rpx;
            }
        }
    }
}
</style>