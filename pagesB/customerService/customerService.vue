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
		
		<view class="problem">
			<view style="font-size: 28rpx;color: #000;">检验检测机构资质认定怎么申请？</view>
			<view>现场办理条码注册需要带齐以下材料</view>
			<view>（1）需要提供有效期内的企业法人营业执照副本原件和A4复印件一份</view>
			<view>（2）公司公章。</view>
			<view>办公地址：烟台市莱山区新苑路17号 5号楼208室 </view>
			<view>电话:6920186</view>
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
		
		<view class="footer">
			
			<view>
				<u-scroll-list :indicator="false" :indicatorWidth="736">
					<view v-for="(item, index) in scrollList" :key="index">
						<view class="scroll_box">
							<view class="scroll_title">{{item.title}}</view>
						</view>
					</view>
				</u-scroll-list>
			</view>
			
			<view class="flex" style="align-items: center;">
				<view style="width: 448rpx; margin: 0 40rpx;">
					<u-input placeholder="请输入......"></u-input>
				</view>
				
				<view style="margin: 0 30rpx;"><u-image :src="picUrl+'smile.svg'" :width="24" :height="24"></u-image></view>
				<view><u-image :src="picUrl+'add.svg'" :width="24" :height="24"></u-image></view>
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
				picUrl,
				scrollList: [
					{title: '检测追踪'},
					{title: '修改订单'},
					{title: '证书流程'},
					{title: '计量器具杯'},
				]
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
		
		.problem {
			width: 710rpx;
			height: 240rpx;
			margin: 0 auto;
			lighting-color: 300rpx;
			font-size: 24rpx;
			border-radius: 16rpx;
			background-color: #fff;
			margin-top: 40rpx;
			color: #999;
			box-sizing: border-box;
			padding: 0 40rpx;
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
		
		.scroll_box {
			color: #999;
			width: 156rpx;
			height: 46rpx;
			line-height: 46rpx;
			border: 2rpx solid #ccc;
			border-radius: 68rpx;
			margin: 0 20rpx;
			text-align: center;
		}
		
		/deep/ .u-input {
			padding: 0 !important;
		}
	}
</style>
