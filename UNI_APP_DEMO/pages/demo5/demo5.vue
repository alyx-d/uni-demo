<script setup lang="ts">
	
</script>

<template>
	<view class="demo5">
		<UserInfo :userInfo="{username: '张三', avatar: '/static/imgs/img-1.avif'}"></UserInfo>
		<UserInfo ></UserInfo>
		<UserInfo :user-info="{username: '王五'}"></UserInfo>
		<LayoutDemo>
			<template #header>
				<text>header</text>
			</template>
		</LayoutDemo>
	</view>
</template>

<style lang="scss" scoped>

</style>
