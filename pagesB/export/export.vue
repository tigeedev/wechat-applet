<template>
	<view class="customer">
		<view class="text">
			<view class="text_box space_between">
				<view>认证流程材料</view>
				<view><u-image :src="picUrl+'arrow.svg'" :width="18" :height="18"></u-image></view>
			</view>
			
			<view class="text_box space_between">
				<view>计量器具的使用方法</view>
				<view><u-image :src="picUrl+'arrow.svg'" :width="18" :height="18"></u-image></view>
			</view>
			
			<view class="text_box space_between">
				<view>标准在哪里查询</view>
				<view><u-image :src="picUrl+'arrow.svg'" :width="18" :height="18"></u-image></view>
			</view>
			
			<view class="text_box space_between">
				<view>绿色有机认证查询结果</view>
				<view><u-image :src="picUrl+'arrow.svg'" :width="18" :height="18"></u-image></view>
			</view>
			
			<view class="text_box space_between">
				<view>计量器具认证流程材料</view>
				<view><u-image :src="picUrl+'arrow.svg'" :width="18" :height="18"></u-image></view>
			</view>
		</view>
		
		<view style="margin: 40rpx 0 20rpx 30rpx;"><u-image :src="picUrl+'v2_rqs9kz.png'" :width="40" :height="40" shape="circle"></u-image></view>
		
		<view class="message" style="margin: 0 0 40rpx 30rpx;">您好，请问有什么需求？</view>
		
		<view style="display: flex;justify-content:flex-end;margin: 0 30rpx 20rpx 0;"><u-image :src="picUrl+'v2_rqth2c.png'" :width="40" :height="40" shape="circle"></u-image></view>
		
		<view style="display: flex;justify-content: flex-end;margin: 0 30rpx 20rpx 0;">
			<view class="message1 flex" style="justify-content: space-between;align-items: center;padding: 0 40rpx;">
				<view>23"</view>
				<view ><u-image :src="picUrl+'source.svg'" :width="24" :height="24" shape="circle"></u-image></view>
			</view>
		</view>
		
		<view style="display: flex;justify-content: flex-end;margin: 0 30rpx 20rpx 0;">
			<view class="message2 flex">
				计量器具的认证流程和材料？
			</view>
		</view>
		
		<view style="margin: 40rpx 0 20rpx 30rpx;"><u-image :src="picUrl+'v2_rqs9kz.png'" :width="40" :height="40" shape="circle"></u-image></view>
		<view class="message" style="margin: 0 0 40rpx 30rpx;">好的，请稍等...</view>
		<view style="margin: 0 0 40rpx 30rpx;">
			<u-image :src="picUrl+'v2_rqsayc.png'" :width="229" :height="365"></u-image>
		</view>
		
		<view class="footer flex">
			<view><u-image :src="picUrl+'source.svg'" :width="24" :height="24"></u-image></view>
			
			<view style="width: 448rpx; margin: 0 40rpx;">
				<u-input placeholder="请输入......"></u-input>
			</view>
			
			<view style="margin: 0 30rpx;"><u-image :src="picUrl+'smile.svg'" :width="24" :height="24"></u-image></view>
			<view><u-image :src="picUrl+'add.svg'" :width="24" :height="24"></u-image></view>
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
				picUrl,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.space_between {
		display: flex;
		justify-content: space-between;
	}
	
	.customer {
		background-color: #ebedf7;
		
		.text {
			width: 710rpx;
			background-color: #fff;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 20rpx;
			border-radius: 0px 0px 10px 10px;
			
			&_box {
				height: 40rpx;
				padding: 10rpx;
				border-bottom: 2rpx dashed #ccc;
			}
		}
		
		.message {
			width: 376rpx;
			height: 80rpx;
			border-radius: 0px 8px 8px;
			box-shadow: rgb(51, 102, 204) 0px 2px 4px 0px;
			background-color: rgb(51, 102, 204);
			color: #fff;
			line-height: 80rpx;
			text-align: center;
		}
		
		.message1 {
			width: 340rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-radius: 8px 0px 8px 8px;
			box-shadow: rgba(11, 63, 136, 0.2) 0px 0px 4px 0px;
			color: #3366cc;
			background-color: #fff;
			box-sizing: border-box;
		}
		
		.message2 {
			width: 428rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-radius: 8px 0px 8px 8px;
			box-shadow: rgba(11, 63, 136, 0.2) 0px 0px 4px 0px;
			color: #3366cc;
			background-color: #fff;
			box-sizing: border-box;
		}
		
		.footer {
			width: 750rpx;
			height: 156rpx;
			position: fixed;
			bottom: 0;
			background-color: #fff;
			box-shadow: rgba(11, 63, 136, 0.1) 0px -2px 6px 0px;
			align-items: center;
			box-sizing: border-box;
			padding: 20rpx;
		}
	}
</style>
