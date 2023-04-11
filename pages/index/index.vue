<template>
	<view class="home">
		<view class="search">
			<view>{{(userInfo.sfkfq==='' ? '非开发区': userInfo.sfkfq) || '非开发区'}}</view>
			<view class="search_input" @click="goSearch">
				<u-input v-model="value" placeholder="请输入您要查询的内容" prefixIcon="search" shape="circle"></u-input>
			</view>
		</view>
		<view class="img">
			<u-image :showLoading="true" :src="picUrl+'v2_r8f2hm.jpg'" width="100%" :height="225" mode="widthFix">
			</u-image>
		</view>

		<view class="service">
			<view class="service_box" @click="handleClick('1')">
				<u-image showLoading="true" :src="picUrl + 'v2_r81k5i.png'" :width="34" :height="34"></u-image>
				<view class="service_text">计量服务</view>
			</view>
			<view class="service_box" @click="handleClick('2')">
				<u-image showLoading="true" :src="picUrl + 'v2_r81j3k.png'" :width="34" :height="34"></u-image>
				<view class="service_text">认证认可</view>
			</view>
			<view class="service_box" @click="handleClick('3')">
				<u-image showLoading="true" :src="picUrl + 'v2_r805v7.png'" :width="34" :height="34"></u-image>
				<view class="service_text">检验检测</view>
			</view>
			<view class="service_box" @click="handleClick('4')">
				<u-image showLoading="true" :src="picUrl + 'v2_r81jaw.png'" :width="34" :height="34"></u-image>
				<view class="service_text">标准服务</view>
			</view>
		</view>

		<view class="swiper">
			<u-swiper :list="swiperList" keyName="src" indicator indicatorMode="dot" :height="74"></u-swiper>
		</view>

		<law />

		<consult />

		<organization />

		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue';
	import law from "@/components/law/law.vue";
	import organization from "@/components/organization/organization.vue";
	import consult from "@/components/consult/consult.vue";
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			law,
			organization,
			consult,
		},
		data() {
			return {
				picUrl,
				value: "",
				swiperList: [{
						src: picUrl + "v2_r81m7a.png",
					},
					{
						src: picUrl + "v2_r81m7h.png",
					},
				],
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: '/pagesB/search/search',
				})
			},

			handleClick(val) {
				switch (val) {
					case "1":
						uni.navigateTo({
							url: "/pagesB/meteringService/meteringService"
						});
						break;
					case "2":
						uni.navigateTo({
							url: "/pagesB/authentication/authentication"
						});
						break;
					case "3":
						uni.navigateTo({
							url: "/pagesB/checkout/checkout"
						});
						break;
					case "4":
						uni.navigateTo({
							url: "/pagesB/standardService/standardService"
						});
						break;
				}
			},

			message() {
				this.$refs.uToast.show({
					type: "warning",
					message: "功能待完善",
					icon: "https://cdn.uviewui.com/uview/demo/toast/top.png"
				})
			},

			goNewsDetails() {
				uni.navigateTo({
					url: "/pagesB/newsDetails/newsDetails"
				})
			},

			test() {
				uni.navigateTo({
					url: "/pagesB/test/test"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		position: relative;

		.search {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24rpx;
			color: #fff;
			background-color: #029df0;
			padding: 10rpx 30rpx;

			/deep/ .u-input {
				background-color: #fff;
				width: 580rpx;
				padding: 4rpx 0 !important;
			}

			.message {
				background-color: #fff;
				color: #fff;
			}
		}

		.img {
			width: 100%;
			height: 100%;
		}

		.service {
			width: 680rpx;
			height: 196rpx;
			position: absolute;
			top: 440rpx;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 12rpx;
			box-shadow: rgba(0, 56, 159, 0.2) 0px 0px 5px 0px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #fff;

			.service_box {
				height: 100%;
				font-size: 24rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.service_text {
					margin-top: 20rpx;
				}
			}
		}

		.swiper {
			width: 680rpx;
			height: 148rpx;
			margin: 180rpx auto 0 auto;
		}


	}
</style>