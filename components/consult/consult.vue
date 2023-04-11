<template>
	<view class="consult">
		<view class="consult_title">我要咨询</view>

		<view class="consult_content">
			<view class="consult_problem" v-for="(item,index) in problemList" :key="item.id" @click="goCustomer">
				<view>
					<view class="flex">
						<view class="consult_text">{{item.title}}</view>
					</view>
					<view class="consult_intro">
						{{item.context.length > 35 ? item.context.slice(0,35)+"..." : item.context}}</view>
				</view>
				<view class="consult_index">{{item.problemno}}</view>
			</view>
		</view>

		<u-modal :show="show" :content='content' :width="200" :height="200">
			<u-button slot="confirmButton" open-type="contact" type="primary" shape="circle"
				@click="show = false">确定</u-button>
		</u-modal>

		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		baseUrl
	} from '@/App.vue';
	import {
		mapState
	} from "vuex";
	export default {
		name: 'consult',
		props: {
			pagetype: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				problemList: [],
				page: 1,
				limit: 3,
				show: false,
				content: "即将进入客服界面"
			};
		},

		computed: {
			...mapState(['userInfo']),
		},

		mounted() {
			this.getProblemList();
		},

		methods: {
			getProblemList() {
				uni.request({
					url: baseUrl + "/SX/sxzgsfqproblem/listing",
					method: 'POST',
					data: {
						entity: {
							pagetype: this.pagetype,
						},
						pager: {
							current: this.page,
							size: this.limit,
						}
					},
					success: ({
						data
					}) => {
						this.problemList = data.obj.records;
					}
				})
			},

			goCustomer() {
				if (this.userInfo.sfkfq === undefined || this.userInfo.sfkfq === '' || this.userInfo.sfkfq === '非开发区') {
					this.$refs.uToast.show({
						type: 'warning',
						message: '提示：非开发区企业暂无此功能'
					})
				} else {
					this.show = true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.consult {
		width: 680rpx;
		height: 600rpx;
		margin: 40rpx auto;
		background: linear-gradient(#41a4ee, #085ed4);
		position: relative;

		.consult_title {
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

		.consult_content {
			box-sizing: border-box;
			padding-top: 70rpx;

			.consult_problem {
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

				.consult_text {
					width: 420rpx;
					height: 28rpx;
					line-height: 28rpx;
					margin: 10rpx 0;
				}

				.consult_intro {
					width: 496rpx;
					height: 68rpx;
					font-size: 24rpx;
					color: #666;
				}

				.consult_index {
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
</style>