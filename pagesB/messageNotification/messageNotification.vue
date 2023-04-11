<template>
	<view class="message">
		<view class="tabs"><u-tabs :list="list" @click="tabsClick" :scrollable="false" :activeStyle="{ color: '#3366cc' }" lineWidth="0"></u-tabs></view>
		<view v-show="activeName === 0">
			<view class="tabs_box">
				<view class="tabs_box_time">2023-01-06  11:00</view>
				<view class="tabs_box_content flex">
					<view>
						<view style="font-size: 28rpx;margin-bottom: 10rpx;">系统通知</view>
						<view>
							<u-image :src="picUrl+'v2_r8f2hm.jpg'" :width="101" :height="46"></u-image>
						</view>
					</view>
					
					<view class="flex" style="justify-content: space-between;align-items: center;width: 464rpx;">
						<view style="font-size: 24rpx;">202305期特种设备人员考试安排</view>
						
						<view>
							<u-image :src="picUrl + 'arrow.svg'" :width="18" :height="18"></u-image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="tabs_box">
				<view class="tabs_box_time">2022-12-26  10:00</view>
				<view class="tabs_box_content flex">
					<view>
						<view style="font-size: 28rpx;margin-bottom: 10rpx;">评价提醒</view>
						<view>
							<u-image :src="picUrl+'raw_1530679059.jpeg'" :width="57" :height="57"></u-image>
						</view>
					</view>
					
					<view class="flex" style="justify-content: space-between;align-items: center;width: 464rpx;">
						<view style="font-size: 24rpx;">兽药残留检验检测，可为客户提供全方位的食品检测服务。 立即去评价>></view>
						
						<view>
							<u-image :src="picUrl + 'arrow.svg'" :width="18" :height="18"></u-image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-show="activeName === 1">
			<view class="list">
				<view class="list_box flex">
					<view class="avatar">
						<u-image :src="picUrl+ 'v2_rqvgpy.png'" :width="40" :height="40" shape="circle"></u-image>
					</view>
					<view style="width: 100%;margin-left: 20rpx;">
						<view class="flex" style="justify-content: space-between;margin-bottom: 10rpx;">
							<view>一号专家</view>
							<view style="font-size: 24rpx;color: #666;">2023/01/12  14：23</view>
						</view>
						<view style="font-size: 24rpx;color: #666;">您好，您所咨询的认证条件……</view>
					</view>
				</view>
				
				<view class="list_box flex">
					<view class="avatar">
						<u-image :src="picUrl+ 'v2_rqvgpy.png'" :width="40" :height="40" shape="circle"></u-image>
					</view>
					<view style="width: 100%;margin-left: 20rpx;">
						<view class="flex" style="justify-content: space-between;margin-bottom: 10rpx;">
							<view>客服二号</view>
							<view style="font-size: 24rpx;color: #666;">2023/01/12  14：23</view>
						</view>
						<view style="font-size: 24rpx;color: #666;">您好，请问有什么需求……</view>
					</view>
				</view>
				
				<view class="list_box flex">
					<view class="avatar">
						<u-image :src="picUrl+ 'v2_rqvgpy.png'" :width="40" :height="40" shape="circle"></u-image>
					</view>
					<view style="width: 100%;margin-left: 20rpx;">
						<view class="flex" style="justify-content: space-between;margin-bottom: 10rpx;">
							<view>客服一号</view>
							<view style="font-size: 24rpx;color: #666;">2023/01/12  14：23</view>
						</view>
						<view style="font-size: 24rpx;color: #666;">您好，您所咨询的认证条件……</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {picUrl} from "@/App.vue"
	export default {
		data() {
			return {
				picUrl,
				list: [{
						name: "消息通知"
					},
					{
						name: "我的消息"
					},
				],
				activeName: 0,
			}
		},
		methods: {
			tabsClick(val){
				this.activeName = val.index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		.tabs {
			width: 100%;
			height: 76rpx;
			line-height: 76rpx;
			border-bottom: 2rpx solid #eeeeee;
			
			&_box {
				margin: 40rpx 0;
				
				&_time {
					height: 46rpx;
					line-height: 46rpx;
					font-size: 24rpx;
					text-align: center;
					color: #666;
				}
				
				&_content {
					width: 686rpx;
					height: 196rpx;
					box-shadow: rgba(0, 56, 159, 0.2) 0px 0px 5px 0px;
					margin: 0 auto;
					box-sizing: border-box;
					padding: 20rpx;
				}
				
			}
		}
		
		.list {
			&_box {
				width: 670rpx;
				height: 80rpx;
				margin: 40rpx 20rpx;
			}
		}
	}
</style>