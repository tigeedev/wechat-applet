<template>
	<view>
		<view class="top_box">
			<text>昵称</text>
			<input class="sl-input" v-model="userInfo.nickName" type="text" maxlength="16" placeholder="请输入昵称" />
		</view>
		<view class="text_box">昵称字数不超过16个字</view>

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
				nickName: ''
			}
		},
		methods: {
			...mapMutations(['login']),

			submit() {
				let that = this
				let model = {
					"nickname": this.userInfo.nickName,
					"id": this.userInfo.id
				}
				uni.request({
					url: baseUrl + "/member/user/updateBaseInfo",
					method: 'PUT',
					data: model,
					header: {
						'content-type': 'application/json',
					},
					success: (res) => {
						console.log("updateBaseInfo", res.data);
						this.$refs.uToast.show({
							type: 'success',
							message: "修改成功",
							complete() {
								// 修改成功后 更新本地缓存
								var userInfo = {
									nickName: that.userInfo.nickName,
								};
								that.login(userInfo);
								uni.navigateBack()
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f2f2;
	}

	.top_box {
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
			width: 110rpx;
			color: #666;
			font-size: 28rpx;
			font-weight: 700;
			display: inline-block;
		}

		.sl-input {
			flex: 1;
			color: #666;
			text-align: left;
			font-size: 28rpx;
		}
	}

	.text_box {
		color: #999;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 24rpx;
		padding: 0 50rpx;
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