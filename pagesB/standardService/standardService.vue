<template>
	<view class="standard_service">
		<view class="search flex">
			<view class="search_input">
				<u-input v-model="value" placeholder="搜索" prefixIcon="search" shape="circle"></u-input>
			</view>

			<view style="position: relative;margin-right: 20rpx;" @click="show = true">
				<u-badge :isDot="true" type="error" absolute :offset="[2, 2]" style="z-index: 3;"></u-badge>
				<u-icon name="chat-fill" color="#4089e4" size="25" style="z-index: 1;"></u-icon>
			</view>
		</view>

		<law :stype="type" />

		<consult :pagetype="type" />
		
		<process :type="type"/>

		<view class="system">
			<view class="system_head flex">
				<view class="system_title">标准体系</view>
				<view class="system_more">更多</view>
			</view>

			<view class="system_content">
				<view v-for="(item,index) in systemList" :key="index" class="system_box">
					<view style="width: 100rpx;text-align: center;">{{item.title}}</view>
					<u-image :src="item.src" :width="35" :height="35"></u-image>
				</view>
			</view>
		</view>


		<organization :pagetype="type" />
		
		<u-modal :show="show" :content='content' :width="200" :height="200">
			<u-button slot="confirmButton" open-type="contact" type="primary" shape="circle" @click="show = false">确定</u-button>
		</u-modal>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue';
	import law from "@/components/law/law.vue";
	import organization from "@/components/organization/organization.vue";
	import process from "@/components/process/process.vue";
	import consult from "@/components/consult/consult.vue";
	export default {
		components: {
			law,
			organization,
			process,
			consult,
		},
		data() {
			return {
				picUrl,
				value: "",
				type: "标准服务",
				show: false,
				content: "即将进入客服界面",
				systemList: [{
						src: picUrl + "v2_r83x8c.png",
						title: "标准"
					},
					{
						src: picUrl + "v2_r83xc5.png",
						title: "标准化结构"
					},
					{
						src: picUrl + "v2_r83xnp.png",
						title: "公告"
					},
					{
						src: picUrl + "v2_r83xow.png",
						title: "修订单"
					},
					{
						src: picUrl + "v2_r83xro.png",
						title: "法律法规"
					},
					{
						src: picUrl + "v2_r83xwm.png",
						title: "生产许可证"
					},
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.standard_service {
		.search {
			align-items: center;

			.search_input {
				width: 628rpx;
				height: 56rpx;
				margin: 0 auto;
				padding: 20rpx 0;

				/deep/ .u-input {
					background-color: #fff;
					padding: 4rpx 0 !important;
				}
			}

			/deep/ .u-badge--error {
				z-index: 1;
			}
		}

		.tabs {
			margin: 0 40rpx;

			/deep/ .u-tabs {
				border-bottom: 2rpx solid #ccc;
			}

			.table {
				width: 680rpx;
				height: 360rpx;
				margin: 20rpx auto 0 auto;
				font-size: 24rpx;

				.table_box {
					height: 60rpx;
					line-height: 60rpx;
					border-bottom: 2rpx dashed #ccc;
					display: flex;
					justify-content: space-between;
				}
			}
		}

		.hotspot {
			width: 680rpx;
			height: 600rpx;
			margin: 0 auto 0 auto;
			background: linear-gradient(#41a4ee, #085ed4);
			position: relative;

			.hotspot_title {
				width: 240rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				font-size: 39rpx;
				color: #0b3f88;
				background-color: #fff;
				box-shadow: rgb(11, 63, 136) 0px 1px 6px 0px;
				;
				border-radius: 8px 0px 20px;
				position: absolute;
				top: -4rpx;
				left: -4rpx;
			}

			.hotspot_content {
				box-sizing: border-box;
				padding-top: 100rpx;

				.hotspot_problem {
					width: 632rpx;
					height: 120rpx;
					background-color: #fff;
					font-size: 28rpx;
					border-radius: 4px 65px 65px 4px;
					box-shadow: rgb(52, 44, 184) 0px 1px 6px 0px;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					padding-left: 20rpx;
					margin: 40rpx auto 0 auto;

					.hotspot_text {
						width: 420rpx;
						height: 28rpx;
						line-height: 28rpx;
						margin: 10rpx 0;
					}

					.hotspot_status {
						width: 60rpx;
						height: 28rpx;
						line-height: 28rpx;
						color: #fff;
						background-color: #27d15d;
						margin: 10rpx 0;
					}

					.hotspot_intro {
						width: 496rpx;
						height: 68rpx;
						font-size: 24rpx;
						color: #666;
					}

					.hotspot_index {
						width: 100rpx;
						height: 100rpx;
						font-size: 56rpx;
						border-radius: 50%;
						color: #0b3f88;
						background-color: #e7f4fd;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}



		.system {
			width: 680rpx;
			margin: 40rpx auto 0 auto;

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

			&_content {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
			}

			&_box {
				width: 200rpx;
				height: 100rpx;
				background-color: #045fb21a;
				border-radius: 16rpx;
				display: flex;
				font-size: 28rpx;
				color: #0260b2;
				justify-content: center;
				align-items: center;
				margin: 20rpx;
			}
		}
	}
</style>