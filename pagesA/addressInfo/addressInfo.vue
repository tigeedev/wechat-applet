<template>
	<view class="ynq-Location">

		<!-- 字母区域 -->
		<view class="ynq-Letter">
			<!-- <view hover-class="Click-Latter" @tap="getLetter('ScrollTop')">*</view> -->
			<!-- <view v-for="(l,i) in LatterName" :key="i" hover-class="Click-Latter" @tap="getLetter(l)">{{l}}</view> -->
			<view v-for="(l,i) in LatterName" :key="i" :class="{'active': active_class == l}" @tap="getLetter(l)">{{l}}</view>
		</view>

		<view class="ynq-AutoLocation flex">
			<view class="ynq-AutoAddress">
				<text class="ynq ynq-dizhi"></text>
				<text>{{CityName}}</text>
			</view>

			<view class="ynq-ReLocation" @tap="RestLocation">
				<text class="ynq ynq-ditudingwei"></text>
				<text>重新定位</text>
			</view>
		</view>

		<scroll-view scroll-y="true" class="ynq-ScrollView" :scroll-into-view="LetterId">
			<!-- 热门城市 -->
			<!-- <view class="ynq-HotCity" id="ScrollTop">
				<view class="ynq-HotCityTitle">
					<text class="ynq ynq-fire"></text>
					<text>热门城市</text>
				</view>
				<view class="ynq-HotCityList flex">
					<text class="radius-3" @tap="getStorage(item)" v-for="(item,index) in HotCity" :key="index">{{item}}</text>
				</view>
			</view> -->
			<!-- 城市列表 -->
			<view class="ynq-CityList">
				<block v-for="(item,index) in CityList" :key="index">
					<view class="ynq-CityLetter" :id="item.initial">{{item.initial}}</view>
					<view class="ynq-CityLine">
						<text @tap="getStorage(item_city.name)" v-for="(item_city,name_index) in item.list"
							:key="name_index">{{item_city.name}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var cityData = require('@/static/json/city.json')
	export default {
		data() {
			return {
				CityName: '',
				HotCity: ['北京', '深圳', '上海', '成都', '广州', '金华'],
				LatterName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
					'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				CityList: cityData.city, //引用json数据
				LetterId: '',
				active_class: 'A'
			}
		},
		methods: {
			//获取定位点
			getLetter(name) {
				this.LetterId = name
				this.active_class = name
				uni.pageScrollTo({
					selector: '#' + name,
					duration: 300
				})
				uni.showToast({
					title: name,
					icon: 'none'
				})
			},
			//存储城市缓存
			getStorage(Name) {
				uni.setStorage({
					key: 'City_Name',
					data: Name
				})
				this.CityName = Name,
					uni.$emit('getCityName', Name)
				//跳转返回
				uni.navigateBack({
					url: '/pages/index/index'
				})
			},

			//重新定位
			RestLocation() {
				console.log("点击重新定位");
				let _this = this
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						console.log("重新定位", res);
						let lat = res.latitude;
						let lng = res.longitude;
						let key = 'QTOBZ-VSO35-MKWIS-I2I4G-ATD5S-NZBID'; //申请地址：https://lbs.qq.com/dev/console/application/mine
						uni.request({
							url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + lat + ',' + lng + '&key=' + key,
							method: "GET",
							success(ress) {
								let data = ress.data; //获取到所有定位的数据
								let CityName = ress.data.result.address_component.city;
								_this.CityName = CityName //更新定位点
								uni.setStorage({
									key: 'City_Name',
									data: CityName
								});
								//将值赋给首页
								uni.$emit('getCityName', CityName)
							},
							fail() {
								uni.showToast({
									'title': '对不起，数据获取失败！',
									'icon': 'none'
								})
							}
						})
					},
					fail(res) {
						uni.showToast({
							'title': '对不起，获取位置失败！',
							'icon': 'none'
						})
					}
				})
			}
		},
		onShow() {
			let _that = this;
			setTimeout(function() {
				uni.getStorage({
					key: 'City_Name',
					success(res) {
						_that.CityName = res.data
					}
				})
			}, 1000)
		},
		onLoad() {
			let _that = this;
			setTimeout(function() {
				uni.getStorage({
					key: 'City_Name',
					success(res) {
						_that.CityName = res.data
					}
				})
			}, 1000)
		}
	}
</script>

<style lang="scss" scoped>
	.ynq-Location {
		height: 100vh;
	}

	.ynq-AutoLocation {
		align-items: center;
		justify-content: space-between;
		width: calc(100% - 40rpx);
		background: rgba(250, 250, 250, .5);
		padding: 20rpx 20rpx;
		margin: 0 20rpx 30rpx;
		box-sizing: border-box;
		
		.ynq-AutoAddress {
			color: #6285E9;
			font-size: 28rpx;
			background-color: #f2f6ff;
			border: 1px solid #e1e4ff;
			border-radius: 40rpx;
			padding: 10rpx 40rpx;
		}
		
		.ynq-ReLocation {
			color: #6285E9;
		}

		text.ynq {
			font-size: 32rpx;
			margin-right: 10rpx;
		}

		text {
			font-size: 30rpx;
		}
	}

	.ynq-HotCity {
		padding: 20rpx;
	}

	.ynq-HotCityTitle {
		padding: 0rpx 0rpx;

		text.ynq {
			margin-right: 10rpx;
			color: #ff0000;
			font-size: 32rpx;
		}

		text {
			font-size: 30rpx;
		}
	}

	.ynq-HotCityList {
		padding: 20rpx 20rpx 20rpx 0;
		flex-wrap: wrap !important;

		text {
			width: 32%;
			display: inline-block;
			text-align: center;
			background: rgba(200, 200, 200, .2);
			margin-bottom: 10rpx;
			font-size: 26rpx;
			padding: 20rpx 0;
		}
	}

	.ynq-Letter {
		position: fixed;
		right: 20rpx;
		top: 208rpx;
		width: 40rpx;
		z-index: 100;

		view {
			display: block;
			width: 30rpx;
			height: 38rpx;
			color: #666;
			text-align: center;
			line-height: 38rpx;
			font-size: 24rpx;
			transition: ease .3s;
			-webkit-transition: ease .3s;
		}
		.active {
			color: #fff;
			background-color: #6285E9;
			border-radius: 20rpx;
		}
	}

	.ynq-CityList {
		.ynq-CityLetter {
			height: 56rpx;
			color: #101010;
			font-size: 28rpx;
			line-height: 56rpx;
			background-color: #eeeeee;
			border-bottom: 1px solid #f7f7f7;
			padding: 0px 40rpx 0 30rpx;
		}

		.ynq-CityLine {
			padding: 0px 40rpx 0 20rpx;
			margin: 20rpx 0px;

			text {
				display: block;
				line-height: 80rpx;
				padding: 0px 10rpx;
				font-size: 30rpx;
				color: #101010;

				// &:nth-child(even) {
				// 	background-color: rgba(200, 200, 200, .12);
				// }
			}
		}
	}

	.ynq-ScrollView {
		height: calc(100vh - 160rpx);
	}

	.Click-Latter {
		font-size: 30rpx !important;
		color: #fff;
		background-color: #6285E9;
		border-radius: 20rpx;
	}
</style>