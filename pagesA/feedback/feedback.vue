<template>
	<view>
		<view class="main">
			<view class="text_box">
				<textarea auto-height class="area-box" v-model="feedbacktext" placeholder="请输入您的宝贵意见或举报内容！"></textarea>
			</view>
			<view class="list_box">
				<text>邮箱地址</text>
				<input class="sl-input" clearable v-model="emailAddress" type="text" placeholder="请输入邮箱方便我们联系您" />
			</view>
			<view class="btn-box">
				<view class="btn-submit" hover-class="btn-hover" @click="submit">保存</view>
			</view>
		</view>

		<!-- 消息提示 -->
		<u-toast ref="uToast"></u-toast>
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
				userid: '',
				emailAddress: '',
				feedbacktext: '',
			};
		},
		methods: {
			submit() {
				// 用户信息不能为空
				// if (this.userid == '') {
				// 	uni.showToast({
				// 		title: '用户信息为空！',
				// 		icon: 'error'
				// 	})
				// 	return
				// }

				// 邮箱不能为空
				// if (this.emailAddress == '') {
				// 	this.$refs.uToast.show({
				// 		type: 'error',
				// 		icon: false,
				// 		message: "邮箱不能为空!",
				// 	})
				// 	return
				// }
				
				// 意见不能为空
				// if (this.feedbacktext == '') {
				// 	this.$refs.uToast.show({
				// 		type: 'error',
				// 		icon: false,
				// 		message: "意见不能为空!",
				// 	})
				// 	return
				// }

				// 调用接口>>>
				// let param = {
				// 	"userId": this.userid,
				// 	"opinionDescribe": this.feedbacktext,
				// 	"emailAddress": this.emailAddress,
				// };
				// uni.request({
				// 	url: baseUrl + "xxx",
				// 	data: JSON.stringify(param),
				// 	method: "POST",
				// 	header: {
				// 		'Content-Type': 'application/json'
				// 	}
				// }).then((result) => {
				// 	let [err, res] = result;
				// 	this.$refs.uToast.show({
				// 		type: 'success',
				// 		message: "反馈成功",
				// 	})

				// 	setTimeout(function() {
				// 		uni.navigateBack()
				// 	}, 2000);
				// })
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f2f2;
	}

	.main {
		height: 1180rpx;
	}

	.text_box {
		width: 100%;
		height: 500rpx;
		padding: 15rpx 20rpx;
		background-color: #fff;
		box-sizing: border-box;

		.area-box {
			width: 100%;
			min-height: 300rpx;
			max-height: 500rpx;
			font-size: 30rpx;
			color: #888888;
			font-weight: 450;
			line-height: 44rpx;
			box-sizing: border-box;
		}
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
		padding: 0 20rpx;
		margin-top: 20rpx;

		text {
			width: 140rpx;
			color: #101010;
			font-size: 30rpx;
			display: inline-block;
		}

		.sl-input {
			flex: 1;
			color: #999;
			text-align: left;
			font-size: 26rpx;
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