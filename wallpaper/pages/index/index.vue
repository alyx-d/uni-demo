<script setup lang="ts">

</script>

<template>
    <view class="index page-bg">
        <TopNavBar title="推荐"></TopNavBar>
        <BannerImage></BannerImage>
        <Notice></Notice>
        <view class="recommend">
            <SubTitle>
                <template #title>每日推荐</template>
                <template #default>
                    <view class="date">
                        <uni-icons type="calendar" color="var(--main-color)" size="18" />
                        <uni-dateformat :date="Date.now()" :threshold="[0, 0]" format="dd" />
                        <text>日</text>
                    </view>
                </template>
            </SubTitle>
            <view class="content">
                <scroll-view class="scroll-view" scroll-x>
                    <view class="wrapper" v-for="item in 10" :key="item">
                        <navigator url="/pages/preview/preview" open-type="navigate" hover-class="navigator-hover">
                            <image src="/static/images/preview_small.webp" mode="widthFix" />
                        </navigator>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="subject">
            <SubTitle>
                <template #title>专题推荐</template>
                <template #default>
                    <view class="more">
                        <text>More+</text>
                    </view>
                </template>
            </SubTitle>
            <view class="content">
                <SubjectItem v-for="item in 8" :key="item" />
                <SubjectItem isMore />
            </view>
        </view>
    </view>
</template>



<style scoped lang="scss">
.index {
    .recommend {
        padding-top: 50rpx;

        .date {
            color: var(--main-color);
            display: flex;
            align-items: center;
        }

        .content {
            width: 720rpx;
            margin: 30rpx 0 0 30rpx;

            .scroll-view {
                white-space: nowrap;

                .wrapper {
                    width: 200rpx;
                    height: 400rpx;
                    display: inline-block;
                    margin-right: 15rpx;

                    &:last-child {
                        margin-right: 30rpx;
                    }

                    image {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .subject {
        padding: 50rpx 0;

        .more {
            color: #888;
        }

        .content {
            margin-top: 30rpx;
            padding: 0 30rpx;
            display: grid;
            gap: 15rpx;
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>
