<template>
	<view class="process">
		<view class="process_head flex">
			<view class="process_title">流程及依据</view>
			<view class="process_more" @click="goProcessBasis">更多</view>
		</view>

		<view class="process_table">
			<view class="table">
				<view class="tr">
					<view class="th">标准体系建设</view>
					<view class="th">流程</view>
					<view class="th">依据</view>
				</view>
				<view class="tr">
					<view class="td">
						<view class="td_content">标准化试点示范</view>
					</view>
					<view class="td">
						<view class="td_content">
							<u-image :src="picUrl+'file.svg'" :width="20" :height="20"></u-image>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
					<view class="td">
						<view class="td_content">
							<view>标准化依据</view>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
				</view>

				<view class="tr">
					<view class="td">
						<view class="td_content">标准化良好行为评价</view>
					</view>
					<view class="td">
						<view class="td_content">
							<view>标准行为评价流程</view>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
					<view class="td">
						<view class="td_content">
							<view>标准行为评价依据</view>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
				</view>

				<view class="tr">
					<view class="td">
						<view class="td_content">企业标准体系建设</view>
					</view>
					<view class="td">
						<view class="td_content">
							<u-image :src="picUrl+'file.svg'" :width="20" :height="20"></u-image>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
					<view class="td">
						<view class="td_content">
							<view>企业标准建设依据</view>
							<view style="margin: 0 10rpx;">|</view>
							<u-image :src="picUrl+'download.svg'" :width="16" :height="16"></u-image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		picUrl
	} from "@/App.vue";
	export default {
		name: "process",
		props: {
			type: {
				type: String,
				default: '',
			}
		},
		data() {
			return {
				picUrl,
				classify: {
					'计量服务': '1640886554325065730',
					'认证认可': '1644226440062992385',
					'检验检测': '',
					'标准服务': '',
				}
			};
		},

		methods: {
			goProcessBasis() {
				
				uni.navigateTo({
					url: "/pagesB/processBasis/processBasis?id=" + this.classify[this.type],
				})
			}
		}
	}
</script>

<style lang="scss">
	.process {
		width: 680rpx;
		margin: 40rpx auto;

		&_head {
			justify-content: space-between;
			padding-bottom: 20rpx;
			border-bottom: 2rpx solid #e5e5e5;
		}

		&_title {
			font-size: 36rpx;
			color: #101010;
		}

		&_title::before {
			content: '';
			background-color: #0b3f88;
			border: 4rpx solid #0b3f88;
			border-radius: 4rpx;
			margin-right: 20rpx;
		}

		&_more {
			line-height: 50rpx;
			font-size: 24rpx;
			color: #999;
		}

		.process_table {
			width: 676rpx;
			margin-top: 40rpx;

			.table {
				display: table;
				width: 100%;
				border: 1rpx solid #1d71e6;
				border-collapse: collapse;
			}

			.tr {
				display: flex;
				width: 100%;
				height: 106rpx;
				justify-content: space-around;
			}

			.th {
				width: 100%;
				display: table-cell;
				font-weight: bold;
				border: 1rpx solid #1d71e6;
				text-align: center;
				font-size: 32rpx;
				line-height: 106rpx;
				color: #fff;
				background-color: #1d71e6;
			}

			.th:nth-child(2) {
				border-left: 1rpx solid #fff;
				border-right: 1rpx solid #fff;
			}


			.td {
				width: 100%;
				display: table-cell;
				border: 1rpx solid #1d71e6;
				text-align: center;

				.td_content {
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					padding: 20rpx;
					color: #666;
					font-size: 28rpx;
				}
			}

			.tr .td:first-child {
				background-color: #e7f4fd;
				font-size: 28rpx;
				color: #0b3f88;
			}
		}

	}
</style>