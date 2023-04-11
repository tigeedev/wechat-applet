<template>
	<view>
		<view class="t-wrap" v-for="(item, i) in browseList" :key="item.id">
			<view v-if="item.dataList != ''" class="t_time">{{item.createTime}}</view>
			<t-slide :ref="`slide${i}`" @del="del" @itemClick="itemClick" :btnArr="[{
								name: '删除',
								background: '#ff5500',
								color: '#fff',
								events: 'del'
							}]">
				<template v-slot:default="{item}">
					<view class="t-conten">
						<view class="t-line t-title">检测对象：{{item.name}}</view>
						<view class="t-line t-info">
							<text class="t-info-txt">检测参数：{{item.detectionParameter}}</text>
							<text>检测周期：{{item.detectionCycle}}</text>
						</view>
						<view class="t-line t-price">￥{{item.price}}</view>
						<view class="t-line t_image">
							<image :src="item.imgLink" mode=""></image>
							<text>{{item.company}}</text>
						</view>
					</view>
				</template>
			</t-slide>
		</view>

		<view class="empty" v-if="browseList.length == 0">
			<u-empty mode="list" text="暂无数据"></u-empty>
		</view>
	</view>
</template>

<script>
	import { baseUrl, picUrl} from '@/App.vue'
	export default {
		data() {
			return {
				browseList: [{
					createTime: '2023-2-20',
					dataList: [{
						id: 1,
						name: '远传压力表',
						price: '100.00',
						createTime: '2023-3-28',
						detectionParameter: '12项',
						detectionCycle: "7-15天",
						company: '晋中市质量监督检验研究院',
						imgLink: picUrl + 'v2_rqw3me.png'
					}]
				}, {
					createTime: '2023-3-28',
					dataList: [{
						id: 2,
						name: '远传压力表',
						price: '100.00',
						createTime: '2023-3-28',
						detectionParameter: '12项',
						detectionCycle: "7-15天",
						company: '晋中市质量监督检验研究院',
						imgLink: picUrl + 'v2_rqw3me.png'
					}, {
						id: 3,
						name: '远传压力表222',
						price: '120.00',
						createTime: '2023-3-25',
						detectionParameter: '12项',
						detectionCycle: "7-15天",
						company: '晋中市研究院',
						imgLink: picUrl + 'v2_rqw3me.png'
					}]
				}]
			}
		},
		onLoad: function() {
			this.browseList.forEach((item, i) => {
				// 动态绑定获取ref
				this.$refs[`slide${i}`][0].assignment(item.dataList)
			})
		},
		methods: {
			//点击单行
			itemClick(data) {
				console.log('点击', data)
			},
			//删除
			del(data) {
				console.log('删除', data)
				
				this.browseList.forEach((item, i) => {
					// 删除对象数组指定元素
					item.dataList = item.dataList.filter((item) => item.id !== data.id)
					this.$refs[`slide${i}`][0].assignment(item.dataList)
				})

				uni.showToast({
					title: '删除ID--' + data.id,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.empty {
		margin-top: 50%;
	}

	.t-wrap {
		background-color: #fff;
		box-sizing: border-box;

		.t_time {
			margin: 10rpx 0;
			padding: 0 30upx;
			color: #999;
			font-size: 24rpx;
			background-color: #f6f6f6;
		}

		.t-conten {
			padding: 10upx 30upx;
			box-sizing: border-box;

			.t-line {
				padding: 5rpx 0;
			}

			.t-title {
				color: #333;
				font-size: 30rpx;
				font-weight: 600;
			}

			.t-info {
				color: #999;
				font-size: 24rpx;

				.t-info-txt {
					margin-right: 40rpx;
				}
			}

			.t-price {
				color: #FB0101;
				font-size: 28rpx;
				font-weight: 500;
			}

			.t_image {
				display: flex;
				align-items: center;

				image {
					width: 35rpx;
					height: 35rpx;
				}
			}
		}
	}
</style>
