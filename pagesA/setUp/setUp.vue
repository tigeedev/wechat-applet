<template>
	<view>
		<u-cell-group>
			<u-cell icon="file-text" size="large" title="意见反馈" isLink @click="feedback"></u-cell>
			<u-cell icon="info-circle" size="large" title="关于我们" isLink @click="aboutUs"></u-cell>
			<u-cell icon="kefu-ermai" size="large" title="在线客服" isLink url="/pagesB/customerService/customerService"></u-cell>
		</u-cell-group>
		
		<button class="btn" hover-class="btn-hover" @click="loginOut">退出登录</button>
		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapMutations(['logout']),
			
			feedback() {
				uni.navigateTo({
					url: '/pagesA/feedback/feedback'
				})
			},
			aboutUs() {
				uni.navigateTo({
					url: '/pagesA/aboutUs/aboutUs'
				})
			},
			// 退出登录
			loginOut() {
				var that = this
				uni.showModal({
					title: '退出登录',
					content: '你确定退出登录吗？',
					success(res) {
						if (res.confirm) {
							that.logout() //清除登录信息
							setTimeout(() => {
								uni.switchTab({
									url: '/pages/user/user'
								})
							}, 500)
						} else if (res.cancel) {}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.btn {
		width: 400rpx;
		height: 80rpx;
		color: #FF5959;
		font-size: 30rpx;
		border-radius: 10rpx;
		border: 1px solid #FF5959;
		background-color: #fff;
		font-weight: 600;
		line-height: 80rpx;
		font-family: 'SourceHanSansSC-regular';
		margin-top: 90rpx;
	}
	
	.btn-hover {
		background-color: #fff5f5;
	}
	
	.u-cell__body--large {
		padding: 40rpx !important;
	}
</style>