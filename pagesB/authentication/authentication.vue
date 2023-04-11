<template>
	<view class="authentication">
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
		
		<process :type="type" />

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
				show: false,
				content: "即将进入客服界面",
				type: '认证认可'
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.authentication {

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

			.organization {
				width: 680rpx;
				margin: 0 auto;

				.organization_head {
					justify-content: space-between;
				}
			}
		}
	}
</style>