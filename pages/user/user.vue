<template>
	<view>
		<!-- 顶部 -->
		<view class="top_box">
			<view class="box_zw"></view>
			<!-- 未登录 -->
			<block v-if="!hasLogin">
				<view class="top_boxx">
					<view class="top_left" @click="goSignUp()">
						<u-avatar src="" size="60"></u-avatar>
						<text class="head_txt">登录/注册</text>
					</view>
					<view class="top_right">
						<view class="right_top">
							<u-icon name="setting-fill" color="#fff" size="22" @click="setUp"></u-icon>
						</view>
						<view class="right_bottom" @click="companyInfo">单位企业信息</view>
					</view>
				</view>
			</block>
			<!-- 已登录 -->
			<block v-else>
				<view class="top_boxx">
					<view class="top_left" @click="goUserInfo()">
						<u-avatar :src="userInfo.headImg" size="60"></u-avatar>
						<text class="head_txt">{{userInfo.tellPhone}}</text>
					</view>
					<view class="top_right">
						<view class="right_top">
							<u-icon name="setting-fill" color="#fff" size="22" @click="setUp"></u-icon>
						</view>
						<view class="right_bottom" @click="companyInfo">单位企业信息</view>
					</view>
				</view>
			</block>
		</view>

		<!-- 中间 -->
		<view class="center_box">
			<view class="center1" @click="browseRecord()">
				<u-icon name="clock" color="#3366cc" size="32"></u-icon>
				<text>浏览记录</text>
			</view>
			<view class="center1" @click="favoriteData()">
				<u-icon name="star-fill" color="#3366cc" size="32"></u-icon>
				<text>收藏数据</text>
			</view>
			<view class="center1" @click="consultateRecord()">
				<u-icon name="chat-fill" color="#3366cc" size="32"></u-icon>
				<text>咨询记录</text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="bottom_box">
			<view class="list_box" v-for="(item,i) in mechanismList" :key="i">
				<view class="list_left">
					<image :src="item.imgLink"></image>
				</view>
				<view class="list_right">
					<view class="title">{{item.name}}</view>
					<view class="info">
						<text class="info_box">检测对象：{{item.detectionObject}}</text>
						<text>检测周期：{{item.detectionCycle}}</text>
					</view>
					<view class="info flex">
						<text>距离：{{item.distance}}</text>
						<u-icon name="map-fill" color="#888" size="12"></u-icon>
					</view>
					<view class="info flex">
						<text>资质：</text>
						<view class="info_img flex">
							<image :src="picUrl + 'u3013.gif'"></image>
							<image :src="picUrl + 'u3012.gif'"></image>
						</view>
						<text class="info_text">{{item.qualifications}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'

	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		data() {
			return {
				picUrl,
				headImg: picUrl + 'toux1.jpeg',
				mechanismList: [{
					name: '山西省纤维检验局',
					detectionObject: '远传压力表',
					detectionCycle: "7-15天",
					distance: "2.0km",
					qualifications: "15项", //资质
					imgLink: picUrl + 'v2_rqzh6h.jpg'
				}, {
					name: '山西省纤维检验局',
					detectionObject: '远传压力表',
					detectionCycle: "7-15天",
					distance: "2.0km",
					qualifications: "15项", //资质
					imgLink: picUrl + 'v2_rqzha2.jpg'
				}, {
					name: '山西省纤维检验局',
					detectionObject: '远传压力表',
					detectionCycle: "7-15天",
					distance: "2.0km",
					qualifications: "15项", //资质
					imgLink: picUrl + 'v2_rqzhbh.jpg'
				}]
			}
		},
		methods: {
			// 设置页面
			setUp() {
				uni.navigateTo({
					url: '/pagesA/setUp/setUp',
				})
			},
			// 登录/注册
			goSignUp() {
				uni.navigateTo({
					url: '/pages/user/login',
				})
			},
			// 个人信息
			goUserInfo() {
				uni.navigateTo({
					url: '/pagesA/userInfo/userInfo',
				})
			},
			// 消息通知
			messageNotification() {

			},
			companyInfo() {
				uni.navigateTo({
					url: '/pagesA/companyInfo/companyInfo',
				})
			},
			browseRecord() {
				uni.navigateTo({
					url: '/pagesA/browseRecord/browseRecord',
				})
			},
			favoriteData() {
				uni.navigateTo({
					url: '/pagesA/favoriteData/favoriteData',
				})
			},
			consultateRecord() {
				uni.navigateTo({
					url: '/pagesA/consultateRecord/consultateRecord',
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.top_box {
		width: 100%;
		height: 400rpx;
		background: linear-gradient(#66aeff, #2a90ff);

		.box_zw {
			height: 130rpx;
		}

		.top_boxx {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 240rpx;

			.top_left {
				display: flex;
				align-items: center;
				margin-left: 40rpx;

				.head_txt {
					color: #fff;
					font-size: 28rpx;
					margin-left: 15rpx;
				}
			}

			.top_right {
				height: 100%;
				font-size: 28rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.right_top {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin: 0 50rpx;
				}

				.right_bottom {
					padding: 4rpx 6rpx;
					border-top-left-radius: 20rpx;
					border-bottom-left-radius: 20rpx;
					background-color: #e9f0ff;
				}
			}
		}
	}

	.center_box {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 150rpx;
		font-size: 24rpx;
		color: #101010;
		background-color: #fff;
		margin: 30rpx 0;

		.center1 {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.bottom_box {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;

		.list_box {
			display: flex;
			align-items: flex-start;
			padding: 40rpx 10rpx 30rpx 30rpx;
			border-bottom: 1px solid #f2f2f2;

			.list_left {
				width: 200rpx;
				height: 168rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.list_right {
				margin-left: 20rpx;

				.title {
					color: #101010;
					font-size: 30rpx;
					font-weight: 700;
					margin-bottom: 8rpx;
				}

				.info {
					height: 44rpx;
					color: #666;
					font-size: 24rpx;

					.info_box {
						margin-right: 10rpx;
					}

					.info_img {
						image {
							width: 40rpx;
							height: 30rpx;
							margin: 0 6rpx;
						}
					}

					.info_text {
						color: #3795d4;
					}
				}
			}
		}
	}
</style>