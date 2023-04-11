<template>
	<view>
		<view class="top_box">
			<view class="list_box line1">
				<text>所在地区</text>
				<view class="info-txt">
					<!-- 选择地区弹窗 -->
					<ming-picker @address="address" @close="close" :defaultAddress="defaultAddress">
						<input class="sl-input" disabled="false" v-model="userInfo.address" type="text" placeholder="请选择省、市" />
						<!-- <input class="sl-input" disabled="false" v-model="region" type="text" placeholder="请选择省、市" /> -->
					</ming-picker>
				</view>
				<view class="arrow">
					<u-icon name="arrow-right" color="#bbbbbb" size="18"></u-icon>
				</view>
			</view>
			<view class="list_box">
				<text>详细地址</text>
				<input class="sl-input" v-model="detailedAddress" type="text" placeholder="请输入街道、小区、楼栋、房间号" />
			</view>
		</view>

		<view class="btn-box">
			<view class="btn-submit" hover-class="btn-hover" @click="submit">确定</view>
		</view>
		
		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		baseUrl,
		picUrl
	} from '@/App.vue'

	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		computed: {
			...mapState(['userInfo'])
		},
		data() {
			return {
				//选中后的显示值
				region: '',
				detailedAddress: '',
				//默认选中
				defaultAddress: ["山西省", "晋中市", "榆次区"],
			}
		},
		methods: {
			...mapMutations(['login']),

			submit() {
				let that = this
				let address = this.userInfo.address.replaceAll('-', '') + this.detailedAddress
				let model = {
					"address": address,
					"id": this.userInfo.id
				}
				uni.request({
					url: baseUrl + "/member/user/updateBaseInfo",
					method: 'PUT',
					data: model,
					header: {
						'content-type': 'application/json',
					},
					success: (ress) => {
						this.$refs.uToast.show({
							type: 'success',
							message: "修改成功",
							complete() {
								// 修改成功后 更新本地缓存
								var userInfo = {
									address: address,
								};
								that.login(userInfo);
								uni.navigateBack()
							}
						})
					}
				});
			},
			address(e) {
				console.log(e)
				// this.region = e.value.join("-");
				this.userInfo.address = e.value.join("-");
			},
			close() {
				console.log("点击了取消")
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f2f2;
	}

	.line1 {
		border-bottom: 1px solid #eaebec;
	}

	.list_box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		line-height: 100rpx;
		color: #333333;
		background-color: #fff;
		padding: 0 50rpx;

		text {
			width: 140rpx;
			color: #666;
			font-size: 28rpx;
			font-weight: 700;
			display: inline-block;
		}

		.sl-input {
			flex: 1;
			color: #999;
			text-align: left;
			font-size: 26rpx;
		}

		.arrow {
			width: 40rpx;
		}

		.info-txt {
			width: 480rpx;
		}
	}

	.btn-box {
		display: flex;
		justify-content: center;
		width: 100%;
		text-align: center;
		margin-top: 60rpx;

		.btn-submit {
			color: #fff;
			font-size: 28rpx;
			width: 680rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #6285e9;
			border-radius: 10rpx;
		}

		.btn-hover {
			background-color: #567ce9;
		}
	}
</style>