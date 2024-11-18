<script setup lang="ts">
	import { computed, ref } from 'vue';
	const goods = ref([
		{ id: 1, title: "小米", price: 3333, checked: false },
		{ id: 2, title: "华为", price: 4444, checked: false },
		{ id: 3, title: "Oppo", price: 5555, checked: false },
		{ id: 4, title: "苹果", price: 6666, checked: false },
	]);

	const onClickRemove = (index : number) => {
		console.log("click remove", index);
		goods.value.splice(index, 1);
	};

	const selectedGroup = ref([]);
	const onCheckboxChange = (event : any) => {
		selectedGroup.value = event.detail.value;
		goods.value.forEach(item => item.checked = selectedGroup.value.includes(String(item.id)));
	};
	const goodsCount = computed(() => {
		selectedGroup.value.length;
	});
	const sumPrice = computed(() => {
		return goods.value.filter(item => item.checked)
			.reduce((s, v) => s + v.price, 0);
	});
</script>

<template>
	<view class="out">
		<checkbox-group @change="onCheckboxChange">
			<view class="item" v-for="(item, index) in goods" :key="item.id">
				<checkbox :value="String(item.id)" :checked="item.checked"></checkbox>
				<text class="title">{{item.title}}</text>
				<text class="price">{{item.price}}元</text>
				<text class="del" @click="onClickRemove(index)">删除</text>
			</view>
		</checkbox-group>

		<view class="card">
			<view class="detail">
				<text>选中{{goodsCount}}个商品 </text>
				<text>总价：{{sumPrice}} 元</text>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.out {
		padding: 10px;

		.item {
			padding: 10px 0;

			.price {
				margin-left: 20px;
			}

			.del {
				color: red;
				padding-left: 20px;
			}
		}
	}
</style>