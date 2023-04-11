<template>
	<view>
		<view class="head_bg"></view>
		<view class="head_img">
			<image :src="headImg" mode=""></image>
		</view>
		<view class="content">
			<view class="list_box">
				<view class="title">公司介绍</view>
				<view class="info">{{introduce}}</view>
			</view>
			<view class="list_box">
				<view class="title">公司官网</view>
				<view class="info">{{website}}</view>
			</view>
			<view class="list_box">
				<view class="title">公司地址</view>
				<view class="info info_txt">办公地址：{{address}}</view>
				<view class="info info_txt">联系方式：{{contactInfo}}</view>
				<view class="map_info">
					<map style="width: 700rpx;height: 100%;" show-location :longitude="longitude" :latitude="latitude" scale="15"
						:markers="markers" @tap="tapMap">
					</map>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue';
	export default {
		data() {
			return {
				headImg: picUrl + 'v2_r879a4.png',
				introduce: '晋中市市场监督管理局是根据市委办公厅、市政府办公厅《关于印发<晋中市机构改革实施方案>的通知》（市厅发〔2019〕2号）精神组建，于2019年1月24日挂牌成立，为市政府的工作部门，正处级。',
				website: 'https://www.jinzhong.com',
				address: '山西省晋中市榆次区迎宾西街66号',
				contactInfo: '0354-3969700',
				longitude: 112.71837, //经度
				latitude: 37.69748, //纬度
				markers: [{
					id: 0,
					longitude: 112.71837,
					latitude: 37.69748,
					title: '我在这里',
					iconPath: '/static/icon_img/weizhi.png',
					width: 30,
					height: 30,
					label: {
						content: '山西省晋中市榆次区迎宾西街66号',
						color: '#000',
						textAlign: 'center',
						bgColor: '#fff',
						borderRadius: 5,
						padding: 4,
					}
				}]
			}
		},
		methods: {
			//点击地图时触发
			tapMap(e) {
				console.log("点击地图", e);
			}
		}
	}
</script>

<style lang="scss">
	.head_bg {
		height: 180rpx;
		background-color: #045fb2;
	}

	.head_img {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 330rpx;
		margin-top: -140rpx;

		image {
			width: 640rpx;
			height: 320rpx;
			border-radius: 15rpx;
		}
	}

	.content {
		padding: 30rpx;

		.list_box {
			margin-bottom: 20rpx;

			.title {
				height: 100rpx;
				color: #000;
				font-size: 38rpx;
				font-weight: 550;
				line-height: 100rpx;
				font-family: "PingFangSC";
			}

			.info {
				color: #333;
				font-size: 28rpx;
			}

			.info_txt {
				height: 40rpx;
				line-height: 40rpx;
			}

			.map_info {
				display: flex;
				justify-content: center;
				width: 100%;
				height: 300rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>